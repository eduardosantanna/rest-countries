import { style } from '@vanilla-extract/css'
import { vars } from '@/themes/theme.css'

export const containerHeader = style({
  width: '100%',
  backgroundColor: vars.backgroundColor.elements,
  padding: '1.2rem 0rem',
  boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.1)'
})

export const containerHeaderContent = style({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 .8rem',
})

export const textTitle = style({
  color: vars.color.text,
  fontWeight: 800,
  fontSize: '2rem',

  '@media': {
    '(max-width: 500px)': {
      fontSize: '1rem'
    }
  }
})

export const containerImage = style({
  width: '1rem',
  height: '1rem',

  '@media': {
    '(max-width: 500px)': {
      width: '.7rem',
      height: '.7rem',
    }
  }
})

export const containerDarkMode = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
  color: vars.color.text,
  gap: '.8rem',
  fontWeight: 600,

  '@media': {
    '(max-width: 500px)': {
      fontSize: '.7rem'
    }
  }
})