import { vars } from '@/themes/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const containerBackButton = style({
  width: '100%',
  padding: '4rem .8rem',
  maxWidth: '1440px',
  margin: '0 auto',
})

export const button = style({
  backgroundColor: vars.backgroundColor.elements,
  padding: '.5rem 2.2rem',
  borderRadius: 8,
  border: 'none',
  outline: 'none',
  boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.1)',
  color: vars.color.text,
  fontWeight: 600,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.4rem',

  ':hover': {
    transform: 'scale(1.1)'
  }
})

export const containerMainDetailContent = style({
  width: '100%',
  padding: '0 .8rem',
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
  gap: '5rem',

  '@media': {
    '(max-width: 1100px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
})

export const section = style({
  width: '50%',

  '@media': {
    '(max-width: 1100px)': {
      width: '100%'
    }
  }
})

export const sectionTextData = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const dataInnerSections = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.6rem',

  '@media': {
    '(max-width: 1100px)': {
      paddingTop: '3rem'
    }
  }
})

export const containerImage = style({
  width: '100%',
  height: '100%',
})

export const titleCard = style({
  fontSize: '2rem',
  color: vars.color.text,
  fontWeight: 800,
  padding: '1.5rem 0',

  '@media': {
    '(max-width: 1100px)': {
      padding: '0 0'
    }
  }
})

const textDataBase = style({
  fontSize: '1.1rem',
  color: vars.color.text,
})

export const textData = styleVariants({
  fontWeight600: [textDataBase, {
    fontWeight: 600
  }],
  fontWeight300: [textDataBase, {
    fontWeight: 300
  }]
})

export const containerDataCountry = style({
  display: 'flex',
  justifyContent: 'space-between',

  '@media': {
    '(max-width: 1100px)': {
      flexDirection: 'column'
    }
  }
})

export const borderCountrieText = style({
  fontSize: '1.1rem',
  color: vars.color.text,
  fontWeight: 600,
  display: 'flex',
  gap: '1rem',
  whiteSpace: 'nowrap',
  paddingTop: '3rem',

  '@media': {
    '(max-width: 1100px)': {
      paddingBottom: '3rem'
    },
    '(max-width: 400px)': {
      flexDirection: 'column'
    }
  }
})

export const borderButtonsContainer = style({
  backgroundColor: vars.backgroundColor.elements,
  boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.1)',
  padding: '.1rem 1.4rem',
  fontWeight: 300,
  border: 'none',
  outline: 'none',
  borderRadius: 4,
  fontSize: '.9rem',
  color: vars.color.text,
  cursor: 'pointer',
  transition: 'all .1s ease-in-out',

  ':hover': {
    transform: 'scale(1.05)'
  }
})

export const containerContentBorderCountrie = style({
  display: 'flex',
  gap: '.5rem',
  flexWrap: 'wrap'
})