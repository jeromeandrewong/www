import ContactLink from "@/components/contactLink";
import Footer from "@/components/footer";
import { AnimateStagger } from "@/components/ui/animateStagger";
import { contactLinks } from "@/lib/data";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
    return (
        <div className="mt-10 flex flex-col items-start gap-y-5">
            <Profile />
            <Contact />
            <About />
            <Toaster />
        </div>
    );
}

const Profile = () => {
    return (
        <div className="flex w-full gap-x-3 rounded-lg border border-secondary p-5">
            <div className="flex items-center justify-center">
                <Image
                    alt="profile picture"
                    className="rounded-full"
                    src="/pp.jpg"
                    width="44"
                    height="44"
                />
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
        <div className=" w-full rounded-lg border border-secondary p-5">
            <h1 className=" mb-4 text-lg text-secondary">Contact</h1>
            <AnimateStagger>
                <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
                    {contactLinks.map((link) => {
                        return (
                            <ContactLink
                                key={link.poc}
                                poc={link.poc}
                                url={link.url}
                                icon={link.icon}
                                username={link.username}
                            />
                        );
                    })}
                </div>
            </AnimateStagger>
        </div>
    );
};

const About = () => {
    return (
        <div className=" w-full rounded-lg border border-secondary p-5">
            <h1 className=" mb-4 text-lg text-secondary">About Me</h1>
            <div className="flex flex-col gap-4 text-sm text-primary_text dark:text-dark_primary_text">
                <p>
                    Junior at Singapore Management University, pursuing a major
                    in Information Systems.
                </p>
                <p>
                    I enjoy exploring ways to create unique, fluid and
                    user-centric web solutions and experiences. I have always
                    had an eye for design and creativity and I am passionate
                    about operating at the intersection of engineering and
                    design. Currently more experienced with React, Typescript,
                    Next.js, Node.js and Tailwind, but always looking to
                    explore.
                </p>
                <p>
                    Passionate about economics, writing, fitness, cafe hopping,
                    and competitive poker. I am always up for a quick BFT
                    session, or to explore the latest trendy and overpriced cafe
                    in town.
                </p>
            </div>
        </div>
    );
};
