import { gifModalContainer } from "./elements";

const showModal = (src, alt) => {
  const gifContent = gifModalContainer.querySelector("#modal-content");
  const close = document.createElement("span");
  const divImage = document.createElement("div");
  close.setAttribute("class", "close");
  close.innerHTML = "&times;";

  gifContent.innerHTML = "";
  gifContent.append(close);

  divImage.setAttribute("class", "modal-img-content");
  divImage.innerHTML = `
  <br/>
  <img src="${src}" alt="${alt}" class="modal-image"/>
  <br/>
  <p>${alt}</p>
`;

  gifContent.append(divImage);
  gifModalContainer.style.display = "block";

  close.onclick = function () {
    gifModalContainer.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === gifModalContainer) {
      gifModalContainer.style.display = "none";
    }
  };
};

export default showModal;
