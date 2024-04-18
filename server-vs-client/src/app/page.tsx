export default function Page() {
    console.log(
        `${typeof window === "undefined" ? "SERVER" : "CLIENT"}: page.tsx at: ${new Date().getTime()}`
    );

    return <div>This is Home Page</div>;
}
