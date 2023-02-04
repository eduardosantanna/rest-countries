import { vars } from '@/themes/theme.css'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: "'Nunito Sans', sans-serif",
  transition: 'all .4s ease-in-out'
})

globalStyle('body', {
  backgroundColor: vars.backgroundColor.body
})