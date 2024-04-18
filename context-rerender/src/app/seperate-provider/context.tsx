"use client";

import { createContext, useContext, useState } from "react";

const NumberContext = createContext<number>(0);
const SetNumberContext = createContext<
    React.Dispatch<React.SetStateAction<number>>
>(() => {});

export function NumberProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState(0);

    return (
        <SetNumberContext.Provider value={setTheme}>
            <NumberContext.Provider value={theme}>
                {children}
            </NumberContext.Provider>
        </SetNumberContext.Provider>
    );
}

export function useNumber() {
    return [useContext(NumberContext), useContext(SetNumberContext)] as const;
}

export function useGetNumber() {
    return useContext(NumberContext);
}
export function useSetNumber() {
    return useContext(SetNumberContext);
}
