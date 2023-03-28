export default defineNuxtConfig({
    extends: "@nuxt-themes/docus",
    routeRules: {
        // Add cors headers
        '/api/': { cors: true }
    }
});
