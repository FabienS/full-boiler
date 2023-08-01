// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "~": "/src",
    "@": "/src",
    "assets": "/src/assets",
    "public": "/public"
  },
  css: ['~/style/main.scss'],
})
