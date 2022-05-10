import Notification from '@/models/Notification'

export const notifications: Notification[] = [
  new Notification({
    id: '1',
    unread: true,
    type: 'feedback',
    params: {
      title: 'Learn how to find your groove in songwriting with Justin Timberlake',
    },
  }),
  new Notification({
    id: '2',
    type: 'trailer',
    unread: true,
    params: {
      title: 'Learn how to find your groove in songwriting with Justin Timberlake',
    },
  }),
  new Notification({
    id: '3',
    type: 'trailer',
    unread: false,
    params: {
      title: 'Learn how to find your groove in songwriting with Justin Timberlake',
    },
  }),
  new Notification({
    id: '4',
    type: 'trailer',
    unread: false,
    params: {
      title: 'Learn how to find your groove in songwriting with Justin Timberlake',
    },
  }),
  new Notification({
    id: '5',
    type: 'trailer',
    unread: false,
    params: {
      title: 'Learn how to find your groove in songwriting with Justin Timberlake',
    },
  }),
  new Notification({
    id: '6',
    type: 'trailer',
    unread: false,
    params: {
      title: 'Learn how to find your groove in songwriting with Justin Timberlake',
    },
  }),
]
