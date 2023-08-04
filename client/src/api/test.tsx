const get = async function get() {
	const response = await fetch('/api').catch((err) => err)
	return response.json()
}

export const test = {
	get
}
