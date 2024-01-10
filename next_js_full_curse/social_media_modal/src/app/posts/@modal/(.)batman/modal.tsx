"use client";
import { useState } from "react";

function Modal({ children }: { children: React.ReactNode }) {
    const [showModal, setShowModal] = useState(false);

    return <dialog id="modal">{children}</dialog>;
}
