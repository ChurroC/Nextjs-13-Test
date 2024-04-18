"use client";

import { useNumber, useSetNumber } from "./context";
import { useNumber2 } from "./context2";
import crypto from "crypto";

export default function HomePage() {
    return (
        <div className="flex justify-around">
            <div className="flex h-screen flex-col items-center justify-around">
                Using Contexts with Seperate Providers
                <BothProvider1 />
                <FirstProvider1 />
                <SecondProvider1 />
            </div>
            <div className="flex h-screen flex-col items-center justify-around">
                Using Contexts with Single Providers
                <BothProvider2 />
                <FirstProvider2 />
                <SecondProvider2 />
            </div>
        </div>
    );
}

function Container({ children }: { children: React.ReactNode }) {
    return (
        <div
            key={crypto.randomBytes(4).toString("hex")}
            className="change-background flex w-fit min-w-52 flex-col gap-3 border p-2"
        >
            {children}
        </div>
    );
}

function BothProvider1() {
    const [number, setNumber] = useNumber();
    return (
        <Container>
            <div>Both Provider Number: {number}</div>
            <button onClick={() => setNumber(number + 1)}>+ 1</button>
            <button onClick={() => setNumber(number - 1)}>- 1</button>
        </Container>
    );
}

function FirstProvider1() {
    const [number] = useNumber();

    return (
        <Container>
            <div>First Provider Number: {number}</div>
        </Container>
    );
}

function SecondProvider1() {
    const setNumber = useSetNumber();

    return (
        <Container>
            <div>Second Provider Selector:</div>
            <button onClick={() => setNumber(num => num + 1)}>+ 1</button>
            <button onClick={() => setNumber(num => num - 1)}>- 1</button>
        </Container>
    );
}

function BothProvider2() {
    const [number, setNumber] = useNumber2();
    return (
        <Container>
            <div>Both Provider Number: {number}</div>
            <button onClick={() => setNumber(number + 1)}>+ 1</button>
            <button onClick={() => setNumber(number - 1)}>- 1</button>
        </Container>
    );
}

function FirstProvider2() {
    const [number] = useNumber2();

    return (
        <Container>
            <div>First Provider Number: {number}</div>
        </Container>
    );
}

function SecondProvider2() {
    const [, setNumber] = useNumber2();

    return (
        <Container>
            <div>Second Provider Selector:</div>
            <button onClick={() => setNumber(num => num + 1)}>+ 1</button>
            <button onClick={() => setNumber(num => num - 1)}>- 1</button>
        </Container>
    );
}
