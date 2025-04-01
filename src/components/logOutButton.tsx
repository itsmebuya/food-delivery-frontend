'use client'

import { useUser } from "@/provider/userProvider"
import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { User } from "lucide-react"

export function LogoutButton() {
  const { user } = useUser()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="rounded-full w-[36px] h-[36px] bg-red-500 flex justify-center items-center">
          <User />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="grid gap-4">
          <div className="space-y-2">
            <p className="font-medium leading-none">{user.email}</p>
          </div>
          <Button>Log out</Button>

        </div>
      </PopoverContent>
    </Popover>
  )
}
