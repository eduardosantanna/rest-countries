import { vars } from '@/themes/theme.css'
import { style, styleVariants, keyframes } from '@vanilla-extract/css'

export const containerCard = style({
  position: 'relative',
  backgroundColor: vars.backgroundColor.elements,
  boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: 300,
  padding: '12.5rem 1.5rem 1.8rem 1.5rem',
  borderRadius: 8,
  overflow: 'hidden',
  cursor: 'pointer',

  ':hover': {
    transform: 'scale(1.1)'
  }
})

export const containerImage = style({
  position: 'absolute',
  top: 0,
  left: 0,
})

export const titleCard = style({
  fontSize: '1.1rem',
  color: vars.color.text,
  fontWeight: 800,
  padding: '1.5rem 0',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
})

const textDataCardBase = style({
  fontSize: '1rem',
  color: vars.color.text,
})

export const textDataCard = styleVariants({
  fontWeight600: [textDataCardBase, {
    fontWeight: 600
  }],
  fontWeight300: [textDataCardBase, {
    fontWeight: 300
  }]
})

