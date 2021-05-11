import axios from "axios";

axios.defaults.baseURL = "https://randomuser.me/api/";
const API_KAY = "KT48-VPH6-IOZH-QU90";

export async function userFetch() {
  try {
    const { data } = await axios.get(`?${API_KAY}&nat=us`);
    return data.results;
  } catch (err) {
    throw Error(err);
  }
}
