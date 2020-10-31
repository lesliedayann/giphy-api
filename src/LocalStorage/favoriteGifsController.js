import cleanSection from "../Components/clear";

const getSavedGifs = () => {
  const savedGifs = ((savedGifs) => {
    try {
      return savedGifs ? JSON.parse(savedGifs) : [];
    } catch (error) {
      return [];
    }
  })(localStorage.savedGifs);
  return savedGifs;
};

// Add gif to favs (local sotorage)
const addFav = (event, id) => {
  const savedGifs = getSavedGifs();
  const gifElement = document.getElementById(id).querySelector("span");
  const gifSvg = gifElement.querySelector("svg");
  const data = id;

  // If the gif exists: gif and heart filled will be removed
  if (savedGifs.includes(data)) {
    const index = savedGifs.indexOf(data);
    if (index > -1) {
      savedGifs.splice(index, 1);
      gifElement.classList.remove("heart-filled");
      gifSvg.setAttribute("data-prefix", "far");
    }
  } else {
    savedGifs.push(data);
    gifElement.classList.add("heart-filled");
    gifSvg.setAttribute("data-prefix", "fas");
  }

  localStorage.savedGifs = JSON.stringify(savedGifs);
  event.preventDefault();
};

const clearFavs = () => {
  localStorage.clear();
  cleanSection();
};

export { getSavedGifs, addFav, clearFavs };
