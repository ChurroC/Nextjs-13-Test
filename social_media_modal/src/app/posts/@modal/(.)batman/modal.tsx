"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        /*
        const modalElement = modalRef.current;
        if (modalElement) {
            modalElement.showModal();
        }
        */
        modalRef.current?.showModal();

        modalRef.current?.addEventListener("close", event => {
            event.preventDefault();
        });
    }, []);

    return (
        <dialog
            ref={modalRef}
            onCancel={() => {
                router.back();
            }}
        >
            {children}
        </dialog>
    );
}
