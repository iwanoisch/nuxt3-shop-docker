// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Products Shop',
            meta: [
                {
                    name: 'description',
                    content: 'Shop with Nuxt 3'
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                {
                    "charset": "utf-8"
                }

            ]
        }
    }
})
