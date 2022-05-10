import { camelizeKeys, decamelizeKeys, decamelize } from 'humps'
import qs from 'querystring'
import { flatten } from 'q-flat'

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface BackendServiceConfig {
  authorization?: string
  mode?: 'development' | 'production'
  baseUrl?: string
}

export interface BackendBaseResponse extends Response {
  error?: string
  errors?: any
  count: number
}

export interface BackendRequestPayload {
  [key: string]: string | number | boolean | Record<string, any>
}

export interface BackendRequestOptions {
  method: RequestMethod
  path: string
  payload?: BackendRequestPayload
  options?: {
    type: 'json' | 'form'
    headers: Record<string, string>
  }
}

export const ROUTES = {
  SESSIONS: {
    CREATE: 'sessions',
  },
  PASSWORD: {
    RESET: 'password',
  },
}

const PUBLIC_API_URL = 'http://localhost:5000/api/v1'

// routePath takes an number of tuple params to deconstruct the original route string and pattern match/replace
// example: routePath('course/:courseId/content/:contentId', [':courseId', 'foo'], [':contentId', 'bar])
// returns: 'course/foo/content/bar
export const routePath = (ident: string, full: boolean, ...vars: [string, string][]): string => {
  let next = full ? `${PUBLIC_API_URL || 'http://localhost:5000/api/v1'}/${ident}` : ident

  vars.forEach((path) => {
    const [k, v] = path
    next = next.replace(k, v)
  })

  return next
}

export default class BackendService {
  mode = 'development'
  baseUrl = PUBLIC_API_URL || 'http://localhost:5000/api/v1'
  authorization

  method: { [key: string]: RequestMethod } = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
  }

  constructor({ authorization, mode, baseUrl }: BackendServiceConfig) {
    if (authorization) this.authorization = authorization

    if (mode) this.mode = mode

    if (baseUrl) this.baseUrl = baseUrl
  }

  getQueryString = (payload: BackendRequestPayload): string => {
    return qs.stringify(flatten(payload))
  }

  makeRequest = (request: BackendRequestOptions): Promise<Response> => {
    const { method, path, payload } = request
    const options = {
      type: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
      ...request.options,
    }

    let qs = ''
    let body

    if (payload && ['GET', 'DELETE'].includes(method)) {
      qs = '?' + this.getQueryString(payload)
    }
    else if (options.type === 'form') {
      body = new FormData()
      for (const [key, value] of Object.entries(payload)) {
        // If strongly typed for rails
        if (typeof value === 'object') {
          for (const [k, v] of Object.entries(value)) {
            body.append(`${decamelize(key)}[${decamelize(k)}]`, v as string | File)
          }
        }
        else {
          body.append(decamelize(key), value as string | File)
        }
      }
    }
    else {
      body = JSON.stringify(decamelizeKeys(payload as Record<string, any>))
    }

    const url = `${this.baseUrl}/${path}${qs}`
    const params: RequestInit = {
      method,
      body,
      credentials: 'include',
      // mode: 'no-cors',
      redirect: 'follow',
      headers: options.headers,
    }

    return fetch(url, params).then((response) => {
      console.log(`${method} ${path} Response`, response)

      const token = response.headers.get('Authorization')

      if (token) {
        localStorage.setItem('token', token)
      }

      return response && response.json()
    }).then((result) => {
      console.log(`${method} ${path} Result`, camelizeKeys(result))
      return camelizeKeys(result)
    }).catch((error) => {
      console.warn(`${method} ${path} Error`, error)
      return error
    })
  }

  sessions = {
    create: (payload: any): Promise<Response> => {
      return this.makeRequest({ method: 'POST', path: ROUTES.SESSIONS.CREATE, payload })
    },
  }
  password = {
    reset: (payload: any): Promise<Response> => {
      return this.makeRequest({ method: 'POST', path: ROUTES.PASSWORD.RESET, payload })
    },
  }
}
