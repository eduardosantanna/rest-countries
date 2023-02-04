import { createThemeContract, createTheme } from '@vanilla-extract/css'

export const vars = createThemeContract({
  backgroundColor: {
    body: '',
    elements: ''
  },
  color: {
    text: ''
  }
})

export const darkTheme = createTheme(vars, {
  backgroundColor: {
    body: 'hsl(207, 26%, 17%)',
    elements: 'hsl(209, 23%, 22%)',
  },
  color: {
    text: 'hsl(0, 0%, 100%)',
  }
})

export const lightTheme = createTheme(vars, {
  backgroundColor: {
    body: 'hsl(0, 0%, 98%)',
    elements: 'hsl(0, 0%, 100%)',
  },
  color: {
    text: 'hsl(200, 15%, 8%)',
  }
})

