import baseTheme from 'gatsby-plugin-theme-ui';

const transition = {
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  duration: '0.4s'
};

export default {
  ...baseTheme,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: '#000000',
    background: '#FFFFFF',
    heading: '#000000',
    accent: '#b42024',
    white: '#FFFFFF',
    black: '#000000',
    modes: {
      dark: {
        text: '#FFFFFF',
        background: '#000000',
        heading: '#FFFFFF'
      }
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    default: 'system-ui, sans-serif'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  text: {
    body: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  },
  sizes: {
    container: 1280
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary'
    }
  },
  breakpoints: ['40em', '56em', '64em'],
  transitions: {
    default: {
      duration: transition.duration,
      timing: transition.easeInOutCubic,
      transition: `all ${transition.duration} ${transition.easeInOutCubic}`
    },
    boom: {
      duration: transition.duration,
      timing: transition.easeOutBack,
      transition: `all ${transition.duration} ${transition.easeOutBack}`
    },
    headroom: {
      transition: 'all 0.25s ease-in-out'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    p: {
      fontSize: [2, 3],
      color: "#999",
      fontFamily: 'body'
    },
    h1: {
      variant: 'text.heading',
      fontSize: [4, 4, 5]
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, 5]
    },
    a: {
      fontFamily: 'body'
    },
    ul: {
      p: 0,
      m: 0
    }
  }
};
