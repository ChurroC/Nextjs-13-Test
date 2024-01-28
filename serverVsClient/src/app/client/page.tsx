"use client";

export default function Page() {
    console.log(
        `client-component.tsx: I was rendered on the ${typeof window === "undefined" ? "Server" : "Client"} at: ${new Date().getTime()}`
    );

    return <div>This is client Page</div>;
}
