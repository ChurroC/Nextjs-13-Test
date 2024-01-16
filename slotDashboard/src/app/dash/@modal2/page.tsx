"use client";

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
            </>
        );
    }
}
