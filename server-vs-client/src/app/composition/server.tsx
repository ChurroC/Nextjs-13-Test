// Must be a child prop to go into client components
// Can be imported into other server components
export default function Page() {
    console.log(
        `${typeof window === "undefined" ? "SERVER" : "CLIENT"}: composition/server.tsx at: ${new Date().getTime()}`
    );

    return <div>This is Server Page</div>;
}
