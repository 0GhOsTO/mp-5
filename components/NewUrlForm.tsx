import createNewURL from "@/lib/createNewURL";
import { URLProps } from "@/types";
import {Box, Input} from "@mui/joy";
import { Button } from "@mui/material";
import { useState } from "react";

export default function NewURLForm({
    append,
}: {
    append: (newURL: URLProps) => void;
}) {
    const [prevURL, setPrevURL] = useState("");
    const [newURL, setNewURL] = useState("");

    console.log("prevURL", prevURL);
    console.log("newURL", newURL);

    return (
    <form
        className="w-[96%] rounded-xl p-4 bg-blue-400"
        onSubmit={(e) => {
            e.preventDefault();
            createNewURL(prevURL, newURL)
                .then((p) => append(p))
                .catch((err) => console.error(err));
        }}
    >

        <p className="w-[100%] font-semibold text-3xl">Type Original URL</p>
        <Input
        placeholder="Original URL"
        value={prevURL}
        onChange={(e) => setPrevURL(e.target.value)}
        sx={{
            borderRadius: 15,
            fontSize : 30,
            fontWeight: "bold",
            height: "60px",
            width: "100%",
            textAlign: "center",
            marginTop: "1rem",
        }}
        variant="soft"
    />

    <Box
    sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        width: "100%",
    }}>
        <p className="w-fit font-semibold text-3xl whitespace-nowrap">Vercel.app url </p>
        <Input
            placeholder="Alias (e.g. gloogloo)"
            value={newURL}
            onChange={(e) => setNewURL(e.target.value)}
            sx={{
                borderRadius: 15,
                fontSize : 30,
                fontWeight: "bold",
                height: "60px",
                width: "100%",
                textAlign: "center",
                margin: "1rem 0rem",
            }}
            variant="soft"
        />
    </Box>


        <div className="w-full flex justify-center">
            <Button type="submit" variant="contained"
                    sx={{
                        width: "100%",
                        fontSize : 20,
                        fontWeight: "bold",
                        backgroundColor: "green",
            }}>
                Create
            </Button>
        </div>


    </form>
);
}
