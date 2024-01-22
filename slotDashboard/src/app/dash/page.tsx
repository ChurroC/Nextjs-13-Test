import Link from "next/link";

export default async function DashboardPage() {
    return (
        <>
            <p>This is dashboard</p>
            <Link href="/dash/test1" className="font-bold">
                Test1
            </Link>
        </>
    );
}

// I if I don't have a loading.tsx then the whole page will be delayed. But with a loading.tsx, the page will be loaded with a skeleton and the modals will also be completely loaded in.
