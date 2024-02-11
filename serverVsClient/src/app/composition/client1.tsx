"use client";

// Have to have server components as children but you can import client components directly
export default function Page({ children }: { children: React.ReactNode }) {
    console.log(
        `${typeof window === "undefined" ? "SERVER" : "CLIENT"}: composition/client2.tsx at: ${new Date().getTime()}`
    );

    return (
        <div>
            <div>This is client Page</div>
            <br />
            {children}
        </div>
    );
}
