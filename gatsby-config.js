const config = require("./data/config")

module.exports = {
	siteMetadata: {
		title: `Vinicius Dias`,
		description: `A little about myself.`,
		author: `@viniciusmdias`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-mdx`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/content`,
				ignore: [`**/\.*`], // ignore files starting with a dot
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleShort,
				description: config.siteDescription,
				start_url: "/",
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "standalone",
				icon: "static/favicon.svg",
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: config.googleAnalyticsID,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
