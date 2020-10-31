import { gifsSection } from "./elements";

const createUserMessage = (message) => {
  const div = document.createElement("div");
  const oopsUrl = "https://media.giphy.com/media/ZeKtmnI20k0eb98599/giphy.gif";
  div.innerHTML = `
  <source> 
    <img src="${oopsUrl}" class="oops-gif" alt="oops gif" title="oops gif"/>
  <source/>
  <h3 class="userMessage">${message}</h3>
  `;
  gifsSection.append(div);
};

export default createUserMessage;
