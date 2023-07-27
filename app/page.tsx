import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
        <div className="mt-10 flex flex-col items-start gap-y-10">
            {/* profile section */}
            <div className="flex w-full justify-center gap-x-3 p-3">
                <div className="flex items-center justify-center">
                    <Avatar className="h-12 w-12">
                        <AvatarImage
                            className="grayscale hover:cursor-alias hover:filter-none"
                            src="/pp.png"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-lg text-primary_text dark:text-dark_primary_text">
                        Jerome Andre Wong
                    </div>
                    <div className="tracking-tighter text-zinc-500">
                        Aspiring Software Engineer
                    </div>
                </div>
            </div>
      </div>
      <div className='text-6xl font-bold tracking-wider text-secondary dark:text-dark_secondary'>
        Secondary
      </div>
      <div className='text-6xl font-bold tracking-wider text-primary_text dark:text-dark_primary_text'>
        Primary
      </div>
    </div>
  )
}
