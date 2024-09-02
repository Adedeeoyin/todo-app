/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: 'hsl(220, 98%, 61%)',
        green:'hsl(192, 100%, 67%)',
        purple:'hsl(280, 87%, 65%)',
        darkTheme: 'hsl(235, 21%, 11%)',
        uTodo:'  hsl(235, 24%, 19%)',
        borderB: 'hsl(233, 11%, 84%)',
        choice2: 'hsl(236, 33%, 92%)',
        choice3: 'hsl(236, 9%, 61%)',
        choice4: 'hsl(235, 19%, 35%)',
        choice5: ' hsl(235, 24%, 19%)',
        choice6: ' hsl(234, 39%, 85%)',
        choice7: ' hsl(234, 11%, 52%)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
