import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({port:8085});

wss.on("connection",(socket:WebSocket)=>{
        socket.onmessage = async(e)=>{
            await client.user.create({
                data:{
                    email:`ws${Math.random()*100}@wsmail.com`,
                    password:"Vkp8989@",
                    name:"vishw patel"
                }
            })
            socket.send("data added!")
        }
})