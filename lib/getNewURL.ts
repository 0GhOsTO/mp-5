import { URLProps } from "@/types";
import getCollection, { URL_COLLECTION } from "@/db";

export default async function getAllPosts(): Promise<URLProps[]> {
    const urlCollection = await getCollection(URL_COLLECTION);
    const data = await urlCollection.find().toArray();

    const urls: URLProps[] = data.map((p) => ({
        id: p._id.toHexString(),
        prevURL: p.string,
        newURL: p.string,
    }));

    return urls.reverse();
}
