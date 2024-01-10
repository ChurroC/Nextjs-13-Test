import Image from "next/image";
import churro from "../churro.jpg";

export default function ChurroPage() {
    return (
        <>
            <p>This is Churro Page</p>
            <Image
                src={churro}
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </>
    );
}
