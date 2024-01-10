import Image from "next/image";
import Link from "next/link";
import churro from "./churro.jpg";
import batman from "./batman.jpg";

export default function PostsPage() {
    return (
        <>
            <p>These are posts</p>
            <Link href="/posts/churro">
                <Image
                    src={churro}
                    width={500}
                    height={500}
                    alt="Picture of the churro"
                />
            </Link>
            <Link href="/posts/batman">
                <Image
                    src={batman}
                    width={500}
                    height={500}
                    alt="Picture of the batman"
                />
            </Link>
        </>
    );
}
