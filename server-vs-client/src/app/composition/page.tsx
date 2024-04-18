import Client1 from "./client1";
import Client2 from "./client2";
import Server from "./server";

// Can import server component into other server components
// But in order to import server components into client components, they must be a child prop like below
export default function Page() {
    console.log(
        `${typeof window === "undefined" ? "SERVER" : "CLIENT"}: composition/page.tsx at: ${new Date().getTime()}`
    );

    return (
        <Client1>
            <div>
                <Client2 />
                <br />
                <Server />
            </div>
        </Client1>
    );
}
