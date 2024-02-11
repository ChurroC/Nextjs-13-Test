"use client";

// Client components are rendered on the initial page load for ssr and then re-rendered on the client side when the page is navigated to.
export default function Page() {
    console.log(
        `${typeof window === "undefined" ? "SERVER" : "CLIENT"}: client/page.tsx at: ${new Date().getTime()}`
    );

    return <div>This is client Page</div>;
}
