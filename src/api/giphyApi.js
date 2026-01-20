const API_KEY = process.env.GIPHY_API_KEY;

const getGifImage = async function (searchQuery) {
	try {
		const res = await fetch(
			`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchQuery}`
		);

		if (!res.ok) throw new Error(`Failed to fetch image: ${res}`);

		const data = await res.json();

		return data;
	} catch (error) {
		console.error(error);
	}
};

export { getGifImage };
