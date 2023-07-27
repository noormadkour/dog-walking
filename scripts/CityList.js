import { getWalkers } from "./database.js";

const walkers = getWalkers();

document.addEventListener("click", (clickEvent) => {
  const cityTarget = clickEvent.target;
  if (cityTarget.dataset.type === "city"){
  window.alert(
    `${cityTarget.dataset.walkername} is servicing ${cityTarget.dataset.city}`
  );
  }
});

export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const walker of walkers) {
    citiesHTML += `<li data-walkername="${walker.name}"
                       data-city="${walker.city}"
                       data-type="city"
    
    >${walker.city}</li>`;
  }

  citiesHTML += "</ol>";

  return citiesHTML;
};
