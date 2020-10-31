import createFavIcon from "./createFavIcon";
import { divGifsContainer, gifsSection } from "./elements";
import showModal from "./modal";

const createGifElement = (gifInfo) => {
  const url = gifInfo.images.fixed_width.url;
  const id = gifInfo.id;
  const alt = gifInfo.title;

  const div = document.createElement("div");
  const picture = document.createElement("picture");
  const spanFav = createFavIcon(id);

  div.setAttribute("class", "gif-grid-item");
  div.setAttribute("id", id);

  picture.innerHTML = `
      <img src=${url} class="gif-thumbnail" title="${alt}" alt="${alt}"/>
  `;
  picture.addEventListener("click", (e) => {
    showModal(url, alt);
  });

  div.append(spanFav);
  div.append(picture);
  divGifsContainer.append(div);
  return gifsSection.append(divGifsContainer);
};

export default createGifElement;
