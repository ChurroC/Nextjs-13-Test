"use client";

import Link from "next/link";
import { useState } from "react";

export default function Modal2() {
    const [error, setError] = useState(false);

    function causeError() {
        setError(true);
    }

    if (error) {
        throw new Error("This error is thrown from Modal 2");
    } else {
        return (
            <>
                This is Modal 2
                <button onClick={causeError}>Click here to cause error</button>
                <br />
                <Link href="/dash/test2" className="font-bold">
                    Test Slot 2
                </Link>
            </>
        );
    }
}
