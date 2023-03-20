export async function load({ params }) {
	console.log(params);
	if (params) {
		return {
			params,
		};
	}
}
