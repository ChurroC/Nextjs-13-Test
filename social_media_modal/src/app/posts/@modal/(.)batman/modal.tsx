"use client";
import { useEffect, useRef, ElementRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<"dialog">>(null);
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        dialogRef.current?.showModal();

        divRef.current?.addEventListener("click", event =>
            event.stopPropagation()
        );
        dialogRef.current?.addEventListener("click", () => {
            dialogRef.current?.close();
        });
    }, []);

    return (
        <dialog className="p-0" ref={dialogRef} onClose={() => router.back()}>
            <div className="p-0" ref={divRef}>
                {children}
            </div>
        </dialog>
    );
}
