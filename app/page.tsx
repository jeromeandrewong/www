import ContactLink from "@/components/contactLink";
import { AnimateStagger } from "@/components/ui/animateStagger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { contactLinks } from "@/lib/data";

export default function Home() {
    return (
        <div className="mt-10 flex flex-col items-start gap-y-10">
            {/* profile section */}
            <div className="flex w-full gap-x-3 p-3">
                <div className="flex items-center justify-center">
                    <Avatar className="h-12 w-12">
                        <AvatarImage
                            className="grayscale hover:cursor-alias hover:filter-none"
                            src="/pp.png"
                        />
                        <AvatarFallback>JW</AvatarFallback>
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
            {/* contact section */}
            <div className=" w-full p-3">
                <h1 className=" mb-4 text-lg text-secondary">Contact</h1>
                <AnimateStagger>
                    {contactLinks.map((link) => {
                        return (
                            <ContactLink
                                key={link.poc}
                                poc={link.poc}
                                url={link.url}
                                username={link.username}
                            />
                        );
                    })}
                </AnimateStagger>
            </div>
        </div>
    );
}
