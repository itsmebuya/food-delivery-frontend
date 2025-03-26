'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const RoleProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const role = localStorage.getItem("role");

        if (role === "USER") {
            router.push("/");
        } else if (role === "ADMIN") {
            window.open('http://localhost:3000');
        }
        setLoading(false)
    }, []);

    if (loading) {
        return <div>...loading</div>
    }

    return children
}
