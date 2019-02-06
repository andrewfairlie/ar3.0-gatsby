module.exports = {
    siteMetadata: {
        title: `alfian`,
        description: `Alfian Ridwan's portfolio website version 3.0`,
        author: `@gatsbyjs`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout.js`)
            }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `AR3.0`,
                short_name: `ar`,
                start_url: `/`,
                background_color: `#140A1E`,
                theme_color: `#E64646`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        'gatsby-plugin-offline',
        `gatsby-plugin-styled-components`
    ]
};
