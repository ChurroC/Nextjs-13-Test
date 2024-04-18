import Link from "next/link";

export default async function Modal1() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return (
        <>
            <p>This is Modal 1</p>
            <br />
            <Link href="/dash/test1" className="font-bold">
                Test 1
            </Link>
        </>
    );
}
