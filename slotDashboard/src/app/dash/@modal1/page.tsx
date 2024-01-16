export default async function Modal1() {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return <>This is Modal 1</>;
}
