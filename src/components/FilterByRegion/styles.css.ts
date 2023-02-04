import { vars } from '@/themes/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const containerSelect = style({
  width: 'max-content',
})

const selectBaseStyle = style({
  border: 'none',
  outline: 'none',
  boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.1)',
  borderRadius: 4,
  padding: '1rem 4rem 1rem 1rem',
  backgroundColor: vars.backgroundColor.elements,
  color: vars.color.text,
  appearance: 'none',
  backgroundSize: '.8rem .8rem',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'calc(100% - 1rem) 50%',
})

export const select = styleVariants({
  'light': [selectBaseStyle, {
    backgroundImage: "url('/assets/img/arrow-black-icon.png')"
  }],
  'dark': [selectBaseStyle, {
    backgroundImage: "url('/assets/img/arrow-white-icon.png')"
  }]
})