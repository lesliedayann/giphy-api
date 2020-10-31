import { getSavedGifs, addFav } from "../LocalStorage/favoriteGifsController";

// Creates heart icon
const createFavIcon = (id) => {
  const span = document.createElement("span");
  const savedGifs = getSavedGifs();

  let heartFilled = "far";
  let heartColor = "";

  if (savedGifs.includes(id)) {
    heartFilled = "fas";
    heartColor = "heart-filled";
  }
  span.setAttribute("class", `gif-fav-icon ${heartColor}`);
  span.addEventListener("click", (event) => {
    addFav(event, id);
  });

  span.innerHTML = ` <i class="${heartFilled} blue fa-heart fa-2x">`;

  return span;
};

export default createFavIcon;
