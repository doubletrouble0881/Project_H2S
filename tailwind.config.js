/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Outfit", "sans-serif"],
      abcc: ['Space Grotesk', "sans-serif"],
      abd: ["Alegreya Sans", "sans-serif"],
      xyz: ["Karla", "sans-serif"],
      xxx: ["SUSE", "sans-serif"]
    },
    fontWeight: {
      regular: 400,
    }
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//     fontFamily: {
//       abc: ["Pacifico", "cursive"],
//       abb: ["Playwrite DK Loopet" ,"cursive"],
//       abcc: [ "Poppins", "sans-serif"],
//       xyz: ["Comic Neue", "cursive"],
//       xxx: ["Bricolage Grotesque", "sans-serif"]
//     }
//   },
//   plugins: [],
// }
