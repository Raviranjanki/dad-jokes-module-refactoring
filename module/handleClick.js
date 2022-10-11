import fetchJokes from "../module/fetchData.js";
import { jokeContainer, button } from "../module/elements.js";
import preLoader from "../module/preloader.js";

export default async function handleClick() {
    const url = "https://icanhazdadjoke.com/";
    console.log(this);
    this.disabled = true;
    jokeContainer.textContent = '';
    jokeContainer.append(preLoader());
    const response = await fetchJokes(url);
    if (!response) return;
    const joke = response.joke;
    jokeContainer.textContent = joke;
    this.disabled = false;
}
