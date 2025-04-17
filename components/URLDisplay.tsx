"use client";
import { URLProps } from "@/types";
import { useState } from "react";
// import PostPreview from "./PostPreview";
import NewURL from "./NewUrlForm";

export default function URLDisplay({
     inputURLs,
 }: {
    inputURLs: URLProps[];
}) {
    const [urls, setUrls] = useState(inputURLs);

    console.log("url received", urls);

    function append(newUrl: URLProps) {
        setUrls([newUrl, ...urls]);
    }

    return (
        <div className="flex flex-col items-center">
            <NewURL append={append} />
            {urls.map((url) => (
                <div key={url.newURL} className="p-2 bg-white m-2 rounded shadow">
                    <p>Original: <a href={url.prevURL} target="_blank">{url.prevURL}</a></p>
                    <p>Shortened:
                        <a
                            href={`http://localhost:3000/url/newURL/${url.newURL}`}
                            target="_blank"
                            className="text-blue-600 underline ml-2"
                        >
                            {`http://localhost:3000/url/newURL/${url.newURL}`}
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
}
