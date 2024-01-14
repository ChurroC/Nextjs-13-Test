export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <div className="flex h-[500px] border-solid border-red-600 border-4">
                <div className="flex-1 border-solid border-purple-700 border-4">
                    {/*modal1*/}
                </div>
                <div className="flex-1 border-solid border-blue-700 border-4">
                    {/*modal2*/}
                </div>
            </div>
        </>
    );
}
