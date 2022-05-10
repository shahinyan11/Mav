import { createContext } from 'react'
import { mapping } from '@eva-design/eva'

export const globalStyle = {
  topNavigationHeight: 70,
}

export const theme = {
  ...mapping,
  'color-basic-100': 'rgba(255, 255, 255, 1)',
  'color-basic-600': 'rgba(0, 0, 0, 1)',
  'color-basic-800': 'rgba(22, 22, 22, 1)',

  'color-control-default': '#FFF200',
  'color-control-active': '#F5E800',
  'color-control-disabled': '#EDEDED',

  'color-basic-focus': '$color-basic-hover',
  'color-basic-hover': 'rgba(44, 44, 44, 1)',
  'color-basic-default': 'rgb(0, 0, 0)',
  'color-basic-active': '#F5E800',
  'color-basic-disabled': 'rgba(237, 237, 237, 1)',
  'color-basic-focus-border': '$color-basic-focus',
  'color-basic-hover-border': '$color-basic-focus',
  'color-basic-default-border': 'rgb(0, 0, 0)',
  'color-basic-active-border': '$color-basic-focus',
  'color-basic-disabled-border': '$color-basic-disabled',

  'color-basic-transparent-100': 'rgba(245, 245, 245, 1)',

  'color-primary-focus': '$color-primary-default',
  'color-primary-hover': '$color-primary-default',
  'color-primary-default': 'rgb(255, 255, 255)',
  'color-primary-active': '#F5E800',
  'color-primary-disabled': '$color-basic-disabled',
  'color-primary-focus-border': '$color-primary-default',
  'color-primary-hover-border': '$color-primary-default',
  'color-primary-default-border': '$color-primary-default',
  'color-primary-active-border': '$color-primary-default',
  'color-primary-disabled-border': '$color-basic-disabled',

  'color-success-100': '#F6FEDC',
  'color-success-200': '#EBFDBA',
  'color-success-300': '#DBF996',
  'color-success-400': '#CAF47A',
  'color-success-500': '#B1ED50',
  'color-success-600': '#8ECB3A',
  'color-success-700': '#6EAA28',
  'color-success-800': '#518919',
  'color-success-900': '#3C710F',
  'color-success-transparent-100': 'rgba(177, 237, 80, 0.08)',
  'color-success-transparent-200': 'rgba(177, 237, 80, 0.16)',
  'color-success-transparent-300': 'rgba(177, 237, 80, 0.24)',
  'color-success-transparent-400': 'rgba(177, 237, 80, 0.32)',
  'color-success-transparent-500': 'rgba(177, 237, 80, 0.4)',
  'color-success-transparent-600': 'rgba(177, 237, 80, 0.48)',

  'color-warning-focus': '$color-warning-default',
  'color-warning-hover': '$color-warning-default',
  'color-warning-default': 'rgb(255, 242, 0)',
  'color-warning-active': '$color-warning-default',
  'color-warning-disabled': '$color-basic-disabled',
  'color-warning-focus-border': '$color-warning-default',
  'color-warning-hover-border': '$color-warning-default',
  'color-warning-default-border': '$color-warning-default',
  'color-warning-active-border': '$color-warning-default',
  'color-warning-disabled-border': '$color-basic-disabled',

  'color-info-focus': 'rgba(255, 255, 255, 0.3)',
  'color-info-hover': '$color-info-focus',
  'color-info-default': 'rgba(255, 255, 255, 0.2)',
  'color-info-active': '$color-info-default',
  'color-info-disabled': '$color-basic-disabled',
  'color-info-focus-border': '$color-info-focus',
  'color-info-hover-border': '$color-info-focus',
  'color-info-default-border': '$color-info-default',
  'color-info-active-border': '$color-info-default',
  'color-info-disabled-border': '$color-basic-disabled',

  'color-danger-100': '#FFE8D7',
  'color-danger-200': '#FFCBAF',
  'color-danger-300': '#FFA887',
  'color-danger-400': '#FF8669',
  'color-danger-500': '#FF4F38',
  'color-danger-600': '#DB2F28',
  'color-danger-700': '#B71C23',
  'color-danger-800': '#931122',
  'color-danger-900': '#7A0A21',
  'color-danger-transparent-100': 'rgba(255, 79, 56, 0.08)',
  'color-danger-transparent-200': 'rgba(255, 79, 56, 0.16)',
  'color-danger-transparent-300': 'rgba(255, 79, 56, 0.24)',
  'color-danger-transparent-400': 'rgba(255, 79, 56, 0.32)',
  'color-danger-transparent-500': 'rgba(255, 79, 56, 0.4)',
  'color-danger-transparent-600': 'rgba(255, 79, 56, 0.48)',

  'text-disabled-color': 'rgba(136, 136, 136, 1)',

  // Select, Input
  'background-basic-color-2': 'rgba(255, 255, 255, 1)',
  'border-basic-color-4': 'rgba(255, 255, 255, 1)',

  // input placeholder color
  'text-hint-color': 'rgba(136, 136, 136, 1)',
}
