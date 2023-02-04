import { style } from '@vanilla-extract/css'

export const containerMain = style({
  width: '100%',
  paddingBottom: '4rem'
})

export const containerSection = style({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '0 .8rem'
})

export const containerSearchAndFilterRegion = style({
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between',

  '@media': {
    '(max-width: 700px)': {
      flexDirection: 'column',
      gap: '2rem'
    }
  }
})

export const containerListCard = style({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '0 .8rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 70,

  '@media': {
    '(max-width: 1453px)': {
      justifyContent: 'center',
    }
  }
})