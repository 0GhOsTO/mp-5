"use server";
import getCollection, {URL_COLLECTION} from "@/db";
import {URLProps} from "@/types";

export default async function createNewURL(
    prevURL: string,
    newURL: string,
): Promise<URLProps> {
    const p = {
        prevURL: prevURL,
        newURL: newURL,
    };

    const urlCollection = await getCollection(URL_COLLECTION);
    const res = await urlCollection.insertOne({ ...p });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { ...p, id: res.insertedId.toHexString() };
}