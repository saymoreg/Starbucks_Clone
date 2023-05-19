/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    display: ["group-hover"],
    extend: {},
    colors: {
      primary: "#00704A", // green
      secondary: "#27251F", // black
      gray: "#d9d8d2", // gray
      white: "#FFFFFF", // white
    },
  },
  // plugins: [require("daisyui")],
};
