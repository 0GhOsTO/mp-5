import createNewURL from "@/lib/createNewURL";
import { URLProps } from "@/types";
import { Textarea } from "@mui/joy";
import { Button, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";

export default function NewURLForm({
    append,
}: {
    append: (newURL: URLProps) => void;
}) {
    const [prevURL, setPrevURL] = useState("");
    const [newURL, setNewURL] = useState("");

    return (
    <form
        className="w-96 rounded-xl p-4 bg-sky-400"
        onSubmit={(e) => {
            e.preventDefault();
            createNewURL(prevURL, newURL)
                .then((p) => append(p))
                .catch((err) => console.error(err));
        }}
    >
    <TextField
        variant="filled"
        sx={{ backgroundColor: "white", width: "100%" }}
        label="URL to be Changed"
        value={prevURL}
        onChange={(e) => setPrevURL(e.target.value)}
    />
    <Textarea
    sx={{
        padding: "0.5rem",
            height: "100px",
            width: "100%",
            borderRadius: 0,
    }}
        variant="soft"
        placeholder="Content"
        value={newURL}
        onChange={(e) => setNewURL(e.target.value)}
    />
    <FormHelperText>Shortened URL</FormHelperText>
        <div className="w-full flex justify-center">
            <Button type="submit" variant="contained" sx={{ width: "80px" }}>
                Create
            </Button>
        </div>
    </form>
);
}
