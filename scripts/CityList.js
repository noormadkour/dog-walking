import { getWalkers, getCities } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

document.addEventListener("click", (clickEvent) => {
  const cityTarget = clickEvent.target;
  let citieswalkers = ``;
  let counter = 0;
  if (cityTarget.dataset.type === "city") {
    for (const walker of walkers) {
      if (walker.city_id === parseInt(cityTarget.dataset.cityid)) {
        counter++;
        citieswalkers += `${walker.name}, `;
      }
    }
    if (counter == 0) {
      window.alert(`No one is servicing ${cityTarget.dataset.cityname}`);
    }
    if (counter == 1) {
      citieswalkers = citieswalkers.slice(0, -2);
      window.alert(
        `${citieswalkers} is servicing ${cityTarget.dataset.cityname}`
      );
    }
    if (counter > 1) {
      citieswalkers = citieswalkers.slice(0, -2);
      window.alert(
        `${citieswalkers} are servicing ${cityTarget.dataset.cityname}`
      );
    }
  }
});

export const CityList = () => {
  let citiesHTML = "<ol>";
  for (const city of cities) {
    citiesHTML += `<li data-cityname="${city.name}"
                       data-cityid="${city.id}"
                       data-type="city"
                      >${city.name}</li>`;
  }
  citiesHTML += "</ol>";
  return citiesHTML;
};
