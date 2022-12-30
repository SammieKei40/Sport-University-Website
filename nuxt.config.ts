// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/style.css', '~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=device-width, initial-scale=1, user-scalable=no',
          title: 'Sports University',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
          ],
        }
      },
      plugins: [
        { src: '~/plugins/aos', mode: 'client', ssr: false }
      ],
})
