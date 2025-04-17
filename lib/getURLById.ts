import getCollection, { URL_COLLECTION } from "@/db";
import {ObjectId} from "mongodb";
import {URLProps} from "@/types";

export default async function getCollectionById(
    id: string,
): Promise<URLProps | null> {
    const urlCollection  = await getCollection(URL_COLLECTION);
    const data = await urlCollection.findOne({newURL: id});

    if(data === null){
        return null;
    }

    const urlData = {
        id: data._id.toHexString(),
        prevURL: data.prevURL,
        newURL: data.newURL,
    };

    return urlData;
}