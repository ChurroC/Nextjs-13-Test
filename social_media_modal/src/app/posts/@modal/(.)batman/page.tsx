import Modal from "./modal";
import Image from "next/image";
import batman from "../../batman.jpg";

export default function BatmanPage() {
    return (
        <Modal>
            <p>This is Batman Modal</p>
            <Image
                src={batman}
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </Modal>
    );
}
