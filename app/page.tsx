import URLDisplay from "@/components/URLDisplay";
import getNewURL from "@/lib/getNewURL";

export default async function Home() {
  const urls = await getNewURL();

  return (
      <div className="flex flex-col items-center bg-blue-200 p-4">
        <URLDisplay inputURLs={urls} />;
      </div>
  );
}
