module.exports = {
  extend: {
    animation: {
      blink: 'blink 1s infinite',
    },
    keyframes: {
      blink: {
        '0%': {
          borderColor: 'transparent',
        },
        '45%': {
          borderColor: 'transparent',
        },
        '50%': {
          borderColor: '#9CA3AF',
        },
        '100%': {
          borderColor: '#9CA3AF',
        },
      },
    }
  },
}