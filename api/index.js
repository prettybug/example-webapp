import { getAnimals } from "./animals";

export default (request, response) => {
    return response.json({animals: getAnimals()});
}