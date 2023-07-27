import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./Providers";
import Nav from "@/components/nav";
import "@fontsource/poppins";
import "@fontsource/raleway";
import AnimateEnter from "@/components/ui/animateEnter";
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <AnimateEnter>
                        <main className="relative mt-5 flex max-h-screen min-h-screen flex-col items-center">
                            <div className="flex h-full w-full max-w-2xl flex-col">
                                <Nav />
                                <div className="mt-20 px-5">{children}</div>
                            </div>
                        </main>
                    </AnimateEnter>
                </Providers>
            </body>
        </html>
    );
}
