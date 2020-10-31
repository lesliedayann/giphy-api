import { clearFavs } from "../LocalStorage/favoriteGifsController";
import { gifsSection } from "./elements";

const createDeleteButton = () => {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `Delete Favs <i class="far fa-trash-alt"></i>`;
  deleteButton.setAttribute("class", "deleButton");
  deleteButton.addEventListener("click", clearFavs);

  gifsSection.append(deleteButton);
};

export default createDeleteButton;
