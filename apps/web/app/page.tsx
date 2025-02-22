import { client } from "@repo/db/client";

export default async function Home() {

    const user = await client.user.findMany();
    return (
        <div>
           
            {user.map((x) => (
                <div key={x.id}>{x.email}</div>
            ))}
        </div>
    );
}
