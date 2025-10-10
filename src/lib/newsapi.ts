import axios from "axios";

const API_KEY = "3fc668c4412748048ee5e3c1fed61fc5";
const BASE_URL = "https://soothsoup-us.backendless.app/api/data/table";

interface IArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  imageurl: string;
}
export async function getNewsHeadline(): Promise<IArticle[]> {
  try {
    const res = await axios.get(BASE_URL);

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
