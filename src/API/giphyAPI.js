import createUserMessage from "../Components/userMessage";
import createGifElement from "../Components/createDivGif";
import createDeleteButton from "../Components/deleteButton";

const giphyKey = "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh";

async function fetchGiphyApi(elementToSearch, byId) {
  const numberOfGifs = 20;
  const queryString = !byId
    ? `/search?q=${elementToSearch}&limit=${numberOfGifs}`
    : `?ids=${elementToSearch}`;

  await fetch(
    `https://api.giphy.com/v1/gifs${queryString}&api_key=${giphyKey}&rating=g`
  )
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
      if (response.status === 404) {
        throw new Error(`The gif with ID ${elementToSearch} was not found`);
      }
      if (!response.ok) {
        throw new Error("Sorry, something went wrong");
      }
    })
    .then((result) => {
      result
        .json()
        .then((gifs) => {
          if (gifs.data.length) {
            byId && createDeleteButton();
            gifs.data.forEach(function addImage(gif) {
              createGifElement(gif);
            });
          } else {
            throw new Error(`Sorry, no GIFs found for ${elementToSearch}`);
          }
        })
        .catch((err) => {
          createUserMessage(err.message);
        });
    })
    .catch((err) => {
      createUserMessage(err.message);
    });
}
export default fetchGiphyApi;
