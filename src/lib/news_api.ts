import axios from "axios";
import { title } from "process";

const BASE_URL = "https://soothsoup-us.backendless.app/api/data/table";

interface IArticle {
  objectId: string;
  title: string;
  content: string;
  author: string;
  imageurl: string;
}

export async function getNewsHeadline(): Promise<IArticle[]> {
  try {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getNewsDetail(slug: string) {
  try {
    const res = await axios.get(`${BASE_URL}`);
    const title = slug.split("%20").join(" ");
    return res.data.find((e: { title: string }) => e.title == title);
  } catch (error) {
    console.error(error);
    return [];
  }
}
