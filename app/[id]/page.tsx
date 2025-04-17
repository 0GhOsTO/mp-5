import getCollectionById from "@/lib/getURLById";
import {redirect} from "next/navigation";

console.log("###ARRIVED IN DIRECTORY###");

export default async function MoveOn({
    params,
 }:{
    params: {id: string }}){
    const data = await getCollectionById(params.id)

    if(!data){
        return redirect("/");
    }
    return redirect(data.prevURL)
}
