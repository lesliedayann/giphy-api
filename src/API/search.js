import fetchGiphyApi from "./giphyAPI";
import { getSavedGifs } from "../LocalStorage/favoriteGifsController";
import cleanSection from "../Components/clear";
import { searchInput } from "../Components/elements";
import createUserMessage from "../Components/userMessage";

const searchByInputValue = () => {
  cleanSection();
  if (!searchInput.value) return;
  fetchGiphyApi(searchInput.value, false);
};

const searchFavGifs = () => {
  cleanSection();

  const favoriteGifsString = getSavedGifs().join(",");
  if (favoriteGifsString) {
    fetchGiphyApi(favoriteGifsString, true);
    return;
  } else {
    createUserMessage(
      "Oops! It seems you don't have any GIF added to favorites"
    );
  }
};

export { searchByInputValue, searchFavGifs };
