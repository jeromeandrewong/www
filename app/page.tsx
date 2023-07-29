import ContactLink from "@/components/contactLink";
import { AnimateStagger } from "@/components/ui/animateStagger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { contactLinks } from "@/lib/data";
import AnimatedText from "@/components/ui/animateText";

export default function Home() {
    return (
        <div className="mt-10 flex flex-col items-start gap-y-10">
            <Profile />
            <Contact />
            <About />
        </div>
    );
}

const Profile = () => {
    return (
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
    );
};

const Contact = () => {
    return (
        <div className=" w-full rounded-lg p-3">
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
    );
};

const About = () => {
    return (
        <div className=" w-full p-3">
            <h1 className=" mb-4 text-lg text-secondary">About Me</h1>
            <div className="flex flex-col gap-4 text-sm text-primary_text dark:text-dark_primary_text">
                <AnimatedText
                    text="Junior at Singapore Management University, pursuing a major
                    in Information Systems and Quantitative Finance."
                />
                <AnimatedText
                    text="I've always explored ways to create unique, fluid and user-centric web
                    solutions mainly using Typescript. However, my current interests are in high frequency trading, Golang, C++ and systems programming."
                />
                <AnimatedText
                    text="Passionate about fitness, cafe hopping, and competitive poker. I am
                    always up for a quick BFT session, or to
                    explore the latest trendy and overpriced cafe in town."
                />
            </div>
        </div>
    );
};
