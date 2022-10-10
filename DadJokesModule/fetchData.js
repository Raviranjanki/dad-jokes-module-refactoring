export default async function fetchJokes(url) {
    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
}
