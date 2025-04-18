import getCollectionById from "@/lib/getURLById";
import {redirect} from "next/navigation";

console.log("###ARRIVED IN DIRECTORY###");

export default async function MoveOn({
    params,
 }:{
    params: Promise<{id: string }>;}){
    const{id} = await params;
    const data = await getCollectionById(id);

    if(!data){
        return redirect("/");
    }
    return redirect(data.prevURL)
}
