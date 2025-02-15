import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        lilita: "Lilita One",
      },
    },
  },
  plugins: [],
} satisfies Config;
