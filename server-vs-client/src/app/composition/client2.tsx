"use client";

// This can be imported
export default function Page() {
    console.log(
        `${typeof window === "undefined" ? "SERVER" : "CLIENT"}: composition/client2.tsx at: ${new Date().getTime()}`
    );

    return <div>This is client Page</div>;
}
