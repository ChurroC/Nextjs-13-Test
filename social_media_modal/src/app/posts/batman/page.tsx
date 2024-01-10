import Image from "next/image";
import batman from "../batman.jpg";

export default function BatmanPage() {
    return (
        <>
            <p>This is Batman Page</p>
            <Image
                src={batman}
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </>
    );
}
