// Server components are always rendered on the server side even when navigated to.
export default function Page() {
    console.log(
        `${typeof window === "undefined" ? "SERVER" : "CLIENT"}: server/page.tsx at: ${new Date().getTime()}`
    );

    return <div>This is Server Page</div>;
}
