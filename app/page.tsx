import URLDisplay from "@/components/URLDisplay";
import getNewURL from "@/lib/getNewURL";

export default async function Home() {
    const urls = await getNewURL();
    console.log("#1 Received existing urls: ", urls);

    return (
        <div className="flex flex-col items-center bg-yellow-400 p-4">
            <URLDisplay inputURLs={urls} />
        </div>
    );
}


