import Link from "next/link";

export default async function Modal1() {
    return (
        <>
            This is test modal 1 but on the left side.
            <Link href="/dash/test2" className="font-bold">
                Test 2
            </Link>
        </>
    );
}
