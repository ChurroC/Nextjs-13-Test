import styles from "./dashboard.module.css";
import Link from "next/link";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.sidebarContainer}>
                {["dash1", "dash2", "dash3"].map((sidebar: string) => {
                    return (
                        <Link
                            href={`/dashboard/${sidebar}`}
                            key={sidebar}
                            className={styles.sidebarItem}
                        >
                            {sidebar}
                        </Link>
                    );
                })}
            </div>
            <div className={styles.childItem}>{children}</div>
        </div>
    );
}
