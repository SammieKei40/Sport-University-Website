// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/style.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Sports University',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
          ],
        }
      }
})
