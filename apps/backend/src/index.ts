import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
    try {
        await client.user.create({
            data: {
                email: `vishwpatel${Math.random() * 100}@gmail.com`,
                name: "Vishw patel",
                password: `Vkp8989@`,
            },
        });
        res.json({
            msg:"Data added"
        })
    } catch (error) {
        console.log(error);

        res.json({
            msg: "errr",
        });
    }
});

app.listen(3001, () => console.log("App is listening on PORT 3001"));
