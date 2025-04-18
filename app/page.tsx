import URLDisplay from "@/components/URLDisplay";
import getNewURL from "@/lib/getNewURL";

export default async function Home() {
    const urls = await getNewURL();
    console.log("#1 Received existing urls: ", urls);

    return (
        <div className="flex flex-col items-center bg-blue-300 p-4">
            <URLDisplay inputURLs={urls} />
        </div>
    );
}


