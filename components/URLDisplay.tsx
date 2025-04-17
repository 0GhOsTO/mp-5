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

    function append(newUrl: URLProps) {
        setUrls([newUrl, ...urls]);
    }

    return (
        <div className="flex flex-col items-center">
            <NewURL append={append} />
            {/*{posts.map((p) => (*/}
            {/*    <PostPreview key={p.id} post={p} />*/}
            {/*))}*/}
        </div>
    );
}
