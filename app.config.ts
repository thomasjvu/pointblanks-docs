export default defineAppConfig({
    docus: {
        title: "Point Blanks Documentation",
        description: "Documentation for the Point Blanks API",
        image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
        socials: {
            twitter: "pointblanks_",
            github: "thomasjvu/pointblanks-docs",
        },
        aside: {
            level: 0,
            exclude: [],
        },
        header: {
            logo: true,
        },
        footer: {
            credits: {
                icon: "Logo",
                text: "Point Blanks API",
                href: "https://pointblanks.xyz"
            },
            iconLinks: [
                {
                    href: "https://discord.gg/BNzyrAv",
                    icon: "simple-icons:discord",
                },
            ],
        },
    },
});
