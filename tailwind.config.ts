import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  daisyui: {
    themes: false //["light", "dark", "cupcake", "synthwave"],
  },
  plugins: [daisyui],
} as Config;
