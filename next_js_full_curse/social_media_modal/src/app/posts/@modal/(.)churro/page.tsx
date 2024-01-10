import Image from "next/image";
import Link from "next/link";
import churro from "../../churro.jpg";

export default function PostsPage() {
    return (
        <>
            <p>This is Churro</p>;
            <Link href="/posts/churro">
                <Image
                    src={churro}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </Link>
        </>
    );
}
