import { getCities, getWalkers } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

document.addEventListener("click", (theClickEvent) => {
  const whatWasClickedOn = theClickEvent.target;
  if (whatWasClickedOn.dataset.type === "walker") {
    for (const city of cities) {
      if (city.id === parseInt(whatWasClickedOn.dataset.cityid)) {
        window.alert(`This walker works in ${city.name}`);
      }
    }
  }
});

export const Walkers = () => {
  let walkerHTML = "<ul>";
  for (const walker of walkers) {
    walkerHTML += `<li  data-id="${walker.id}"
                        data-cityid="${walker.city_id}"
                        data-type="walker"
    >${walker.name}</li>`;
  }
  walkerHTML += "</ul>";
  return walkerHTML;
};
