"use client";
import { URLProps } from "@/types";
import { useState } from "react";
import NewURL from "./NewUrlForm";

export default function URLDisplay({
     inputURLs,
 }: {
    inputURLs: URLProps[];
}) {
    const [urls, setUrls] = useState(inputURLs);

    console.log("#2 url received", urls);
    //Add the newly created url in the array
    function append(newUrl: URLProps) {
        setUrls([newUrl, ...urls]);
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>

            <NewURL append={append} />
            {urls.map((url) => (
                <div
                    key={url.newURL}
                    style={{
                        padding: "1rem",
                        backgroundColor: "white",
                        margin: "0.5rem",
                        borderRadius: "0.5rem",
                        width: "96%",
                    }}>
                    <p className ="text-2xl"><strong className="text-2xl">Original: </strong><a href={url.prevURL} target="_blank">{url.prevURL}</a></p>
                    <p className ="text-2xl"><strong className="text-2xl">Shortened: </strong>
                        <a
                            href={`http://localhost:3000/${url.newURL}`}
                            target="_blank"
                            className="text-blue-500 underline ml-2"
                        >
                            {`http://localhost:3000/${url.newURL}`}
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
}
