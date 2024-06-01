import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#FFFFFF',
      },
      info: {
        main: '#FF5D55'
      },
      grey: {
        "300": '#8A9099'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1700,
        xl: 1536
      }
    },
    typography: {
      h1: {
        fontSize: '38px',
        fontWeight: '700',
        lineHeight: '44.65px',
        fontFamily: 'inherit'
      },
      h2: {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '28.2px',
        fontFamily: 'inherit'
      },
      h3: {
        fontSize: '22px',
        fontWeight: '700',
        lineHeight: '25.85px',
        fontFamily: 'inherit'
      },
      h4: {
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '25.85px',
        fontFamily: 'inherit'
      },
      h5: {
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '23.5px',
        fontFamily: 'inherit'
      },
      h6: {
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21.15px',
        fontFamily: 'inherit'
      },
      body2: {
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '14.1px',
        fontFamily: 'inherit'
      },
      subtitle1: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '14.1px',
        fontFamily: 'inherit'
      },
      subtitle2: {
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '11.75px',
        fontFamily: 'inherit'
      },
      body1: {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16.45px',
        fontFamily: 'inherit'
      },
      caption: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16.45px',
        fontFamily: 'inherit'
      }
    }
  });