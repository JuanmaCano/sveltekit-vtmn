export async function load({params, url}) {
	//console.log(params);
	console.log(url.pathname);
	if (params) {
		return {
			params,
		};
	}
}
