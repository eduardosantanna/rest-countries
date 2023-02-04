import { vars } from '@/themes/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const containerSearchBar = style({
  width: 'max-content',

  '@media': {
    '(max-width: 700px)': {
      width: '100%',
    }
  }
})

export const searchBarBaseStyle = style({
  color: vars.color.text,
  backgroundColor: vars.backgroundColor.elements,
  border: 'none',
  outline: 'none',
  fontSize: '.9rem',
  padding: '16px 230px 16px 80px',
  boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.1)',
  borderRadius: 4,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1.2rem 1.2rem',
  backgroundPosition: '30px 50%',

  '::placeholder': {
    color: vars.color.text,
  },

  '@media': {
    '(max-width: 700px)': {
      width: '100%',
      paddingRight: 0
    }
  }
})

export const searchBar = styleVariants({
  'light': [searchBarBaseStyle, {
    backgroundImage: "url('/assets/img/search-black-icon.png')"
  }],
  'dark': [searchBarBaseStyle, {
    backgroundImage: "url('/assets/img/search-white-icon.png')"
  }]
})