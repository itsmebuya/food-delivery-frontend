'use client'

import { useUser } from "@/provider/userProvider"

export const LogoutButton = () => {
    const { email } = useUser()

    return (
        <div>
            {email}
        </div>
    )
}