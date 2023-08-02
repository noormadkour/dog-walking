import { getCities, getPets, getWalkers } from "./database.js";

// Get copy of state for use in this module
const pets = getPets();
const walkers = getWalkers();
const cities = getCities();

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, walkers) => {
  let petWalker = null;
  for (const walker of walkers) {
    if (walker.id === pet.walkerId) {
      petWalker = walker;
    }
  }
  return petWalker;
};

export const Assignments = () => {
  let assignmentHTML = "";
  assignmentHTML += "<ul>";
  for (const pet of pets) {
    const currentPetWalker = findWalker(pet, walkers);
    for (const city of cities) {
      if (city.id === currentPetWalker.city_id) {
        assignmentHTML += `
                <li>
                    ${pet.name} is being walked by
                    ${currentPetWalker.name} in ${city.name}
                </li>
            `;
      }
    }
  }
  assignmentHTML += "</ul>";
  return assignmentHTML;
};
