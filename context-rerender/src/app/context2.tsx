"use client";

import { createContext, useContext, useState } from "react";

const NumberContext = createContext<
    [number, React.Dispatch<React.SetStateAction<number>>]
>([0, () => {}]);

export function NumberProvider2({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState(0);

    return (
        <NumberContext.Provider value={[theme, setTheme]}>
            {children}
        </NumberContext.Provider>
    );
}

export function useNumber2() {
    return useContext(NumberContext);
}
