/* eslint-disable no-invalid-this */

import {
  StoryfileConfig,
  StoryfileConversationStarter,
  StoryfileDialogue,
} from '@/store/storyfile/types'
import { isNull, mergeWith } from 'lodash'

export type StoryfileID = string
export type DialogueSessionID = string

export enum StoryfileGateway {
  production = 'https://gateway.prod.storyfile.com/api/v1',
  staging = 'htts://gateway.staging.storyfile.com/api/v1',
  development = 'https://gateway.dev.storyfile.com/api/v1',
}

export const defaultInteractionConfig: Partial<StoryfileInteraction> = {
  quality: 1080,
  language: 'en-US',
  clientID: 'Versus',
}

export type StoryfileInteraction = {
  sessionID: DialogueSessionID
  message: string
  quality?: number
  language?: string
  clientID?: string
}

export type StoryfileReply = {
  video: {
    id: number,
    transcription: string,
    url: string,
  }
}

type StoryfileConversationStartersResponse = {
  conversationStarters: StoryfileConversationStarter[]
}

export interface StoryfileClientConfig {
  apiKey?: string
  gateway: string
}

const defaultStoryfileClientConfig: StoryfileClientConfig = {
  apiKey: '',
  gateway: StoryfileGateway.production,
}

class StoryfileClient {
  private config: StoryfileClientConfig = defaultStoryfileClientConfig

  public constructor(config: StoryfileClientConfig) {
    try {
      this.config = { ...this.config, ...config }

      if (this.config.apiKey === '') {
        throw new Error('StoryfileClientConfig.apiKey is required')
      }

      return this
    }
    catch (error) {
      throw error
    }
  }

  private buildURL(path: string): URL {
    return new URL(path, this.config.gateway)
  }

  private headers(extra?: Record<string, string>): Record<string, string> {
    return {
      ...extra,
      'Content-Type': 'application/json',
      'x-api-key': `${this.config.apiKey}`,
    }
  }

  public getConfig = async (id: StoryfileID): Promise<StoryfileConfig> => {
    const url = this.buildURL(`integration/storyfile/${id}/config`).toString()
    const response = await fetch(url, {
      method: 'GET',
      headers: this.headers(),
    })

    return response.json()
  }

  public startSession = async (id: StoryfileID): Promise<StoryfileDialogue> => {
    const url = this.buildURL('integration/dialogue/start').toString()
    const headers = this.headers()
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        storyfileId: id,
      }),
    })

    return response.json()
  }

  public getConversationStarters = async (id: StoryfileID): Promise<StoryfileConversationStarter[]> => {
    const url = this.buildURL(`integration/storyfile/${id}/conversationStarters`).toString()
    const response = await fetch(url, {
      method: 'GET',
      headers: this.headers(),
    })
    const { conversationStarters }: StoryfileConversationStartersResponse = await response.json()
    return conversationStarters
  }

  public interact = async (interaction: StoryfileInteraction): Promise<StoryfileReply> => {
    const url = this.buildURL('integration/dialogue/interact').toString()
    const { sessionID, message, quality, language, clientID } = interaction
    const response = await fetch(url, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify(mergeWith({}, defaultInteractionConfig, {
        sessionId: sessionID,
        userUtterance: message,
        lang: language,
        quality: quality,
        clientId: clientID,
      }, (o, s) => isNull(s) ? o : s)),
    })

    return response.json()
  }
}

export default StoryfileClient
