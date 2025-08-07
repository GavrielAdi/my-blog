interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://zacriel-blog.vercel.app/', // Write here your website url
	author: 'Gavriel Pramuda Kurniaadi', // Site author
	title: 'Welcome to my Space!', // Site title.
	description:
		'Sebuah catatan laku, menjadi perajin setiap momen. Meramu intisari dari riuh mesin dan heningnya sanubari, untuk kemudian dibagikan sebagai tembang-tembang kecil penanda waktu.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
