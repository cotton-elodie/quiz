import axios from "axios";

export async function requestQuestion(id) {
  try {
    const response = await axios.get(`http://localhost:3000/question/${id}`);

    return response;
  } catch (erreur) {
    return erreur.response;
  }
}
