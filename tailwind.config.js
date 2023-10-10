/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        scissorsColor: "hsl(39, 89%, 49%)",
        rockColor: "hsl(349, 71%, 52%)",
        paperColor: "hsl(230, 89%, 62%)",
        darkSpace: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

/*
bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600
radial-gradient(rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))
## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1366px

## Colors

### Primary

- Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
- Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
- Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
- Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
- Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)

### Neutral

- Dark Text: hsl(229, 25%, 31%)
- Score Text: hsl(229, 64%, 46%)
- Header Outline: hsl(217, 16%, 45%)

### Background

- Radial Gradient: hsl(214, 47%, 23%) to hsl(237, 49%, 15%)

module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
*/
