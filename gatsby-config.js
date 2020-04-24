module.exports = {
	siteMetadata: {
		title: `Vinicius Dias`,
		author: {
			name: `Vinicius Dias`,
			summary: `who lives and works in Florianópois building useful things.`,
		},
		description: `A web-portfólio`,
		siteUrl: `https://viniciusdias.works`,
		social: {
			twitter: `vinimdias10`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-141117092-13`,
			},
		},

		`gatsby-plugin-mdx`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Portfolio de Vinicius Dias`,
				short_name: `VD`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/favicon.svg`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/content`,
				ignore: [`**/\.*`], // ignore files starting with a dot
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
		`gatsby-plugin-advanced-sitemap`,
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
				generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
			},
		},
	],
}
