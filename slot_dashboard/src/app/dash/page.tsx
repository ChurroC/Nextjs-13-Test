export default async function DashboardPage() {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return <p>This is dashboard</p>;
}
