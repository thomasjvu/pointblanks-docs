export default defineNuxtConfig({
    extends: "@nuxt-themes/docus",
    routeRules: {
        // Add cors headers
        "/*": { cors: true, headers: { 'access-control-allow-methods': '* '} }
    }
});
