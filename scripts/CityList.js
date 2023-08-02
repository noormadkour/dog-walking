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

export const removeDuplicates = (array) => {
  return [...new Set(array)];
};

export const CityList = () => {
  let cityArray = [];
  let citiesHTML = "<ol>";

  for (const walker of walkers) {
    for (const city of cities) {
      if (walker.city_id === city.id) {
        cityArray.push(city);
      }
    }
  }
  let uniqueCities = removeDuplicates(cityArray);
  for (const city of uniqueCities) {
    citiesHTML += `<li data-cityname="${city.name}"
                       data-cityid="${city.id}"
                       data-type="city"
                      >${city.name}</li>`;
  }
  citiesHTML += "</ol>";
  return citiesHTML;
};
