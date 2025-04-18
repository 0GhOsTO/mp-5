"use server";
import getCollection, {URL_COLLECTION} from "@/db";
import {URLProps} from "@/types";

export default async function createNewURL(
    prevURL: string,
    newURL: string,
): Promise<URLProps> {

    const urlCollection = await getCollection(URL_COLLECTION);
    const exists = await urlCollection.findOne({newURL});
    if(exists){
        throw new Error("Alias already exists");
    }

    try {
        //Server side url checking
        const res = await fetch(prevURL, {method: "HEAD"});
        console.log("res.ok: ", res.ok);
        console.log("res.status: ", res.status);

        if(!res.ok || res.status !== 200){
            throw new Error("URL is not reachable");
        }
    }catch{
        throw new Error("Invalid URL");
    }

    const p = {
        prevURL: prevURL,
        newURL: newURL,
    };

    const res = await urlCollection.insertOne({ ...p });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { ...p, id: res.insertedId.toHexString() };
}