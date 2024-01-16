export default async function DashboardPage() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return <p>This is dashboard</p>;
}

// I if I don't have a loading.tsx then the whole page will be delayed. But with a loading.tsx, the page will be loaded with a skeleton and the modals will also be completely loaded in.
