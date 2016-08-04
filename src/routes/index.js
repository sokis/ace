// We only need to import the modules necessary for initial render
const createRoutes = {
	routes: {
		'/': require("./Home"),
		'/themes/': require("./Themes"),
		'/login/': require("./Login"),
		'/info/': require("./Info")
	},

	alias: {
		// '/:tab': '/'
	}
}


export default createRoutes