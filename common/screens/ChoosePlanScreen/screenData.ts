import { cards as images } from '@/assets/images'

export const tabs = [
  {
    title: 'Annual',
    key: 'Annual',
  },
  {
    title: 'Quarterly',
    key: 'Quarterly',
  },
  {
    title: 'Monthly',
    key: 'Monthly',
  },
]

export const cards = [
  {
    background: images.planCard_1,
    price: '$240',
    description: 'Renewed every twelve months',
    text: 'Access to Versus Interactive, Signature Series and Legacy Series courses',
    savePercent: 'Save 20%',
  },
  {
    background: images.planCard_2,
    price: '$65',
    description: 'Renewed every three months',
    text: 'Access to Versus Interactive, Signature Series and Legacy Series courses',
    savePercent: 'Save 10%',
  },
  {
    background: images.planCard_3,
    price: '$24',
    description: 'Renewed every month',
    text: 'Access to Versus Interactive, Signature Series and Legacy Series courses',
  },
]
