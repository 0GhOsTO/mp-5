import createNewURL from "@/lib/createNewURL";
import { URLProps } from "@/types";
import { Input} from "@mui/joy";
import { Button } from "@mui/material";
import { useState } from "react";

export default function NewURLForm({
    append,
}: {
    append: (newURL: URLProps) => void;
}) {
    const [prevURL, setPrevURL] = useState("");
    const [newURL, setNewURL] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    //client side checking
    const isValidFormat = /^(https?:\/\/)[\w.-]+\.[a-z]{2,}.*$/i.test(prevURL);
    console.log("###isValid?: ", isValidFormat);

    return (
    <form
        className="w-[96%] rounded-xl p-4 bg-blue-500"
        onSubmit={async(e) => {
            e.preventDefault();
            setErrorMsg(""); //Erase the previous error message

            try {
                append(await createNewURL(prevURL, newURL));
            }catch (err: unknown) {
                if (err instanceof Error) {
                    setErrorMsg(err.message);
                } else {
                    setErrorMsg("Something went wrong");
                }
            }
            if(!isValidFormat){
                setErrorMsg("Invalid format");
                throw new Error("Invalid format");
            }
        }}
    >

        <p className="w-[100%] font-semibold text-3xl text-white">Type Original URL</p>
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

    <div
        className = "w-full"
    style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
    }}>
        <p className="w-fit font-semibold text-3xl whitespace-nowrap text-white">Vercel.app url </p>
        <Input
            placeholder="Alias"
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
    </div>

    <div className="w-full flex justify-center">
        <Button type="submit" variant="contained"
                sx={{
                    width: "100%",
                    fontSize : 20,
                    fontWeight: "bold",
                    backgroundColor: "deepskyblue",
        }}>
            Create
        </Button>
    </div>

        {errorMsg && (
            <p className="rounded-md text-center text-2xl text-white bg-red-500">{errorMsg}</p>
        )}
    </form>
);
}
