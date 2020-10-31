import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { searchByInputValue, searchFavGifs } from "../src/API/search";

import {
  searchButton,
  searchInput,
  favButton
} from "../src/Components/elements";

const debounce = (callback, wait = 500) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
};
const debounceFetchApi = debounce(searchByInputValue);

const onClickSearch = () => {
  searchByInputValue();
};
const onClickFavsButton = () => {
  searchFavGifs();
};
// On keyup event:
// evaluate if input value length is >= 3 or keycode is enter
searchInput.addEventListener("keyup", (event) => {
  (event.target.value.length >= 3 || event.keyCode === 13) &&
    debounceFetchApi();
});

searchButton.addEventListener("click", onClickSearch);
favButton.addEventListener("click", onClickFavsButton);
