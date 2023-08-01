import "./globals.css";
import { Providers } from "./Providers";
import Nav from "@/components/nav";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { siteConfig } from "@/lib/site";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: ["Next.js", "React", "Tailwind CSS", "Blog", "Portfolio"],
    authors: [
        {
            name: "Jerome",
            url: "https://www.github.com/jeromeandrewong",
        },
    ],
    creator: "Jerome",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "@jeromeandrewong",
    },
};

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "700"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <main
                        className={cn(
                            poppins.className,
                            "relative mx-auto flex max-h-screen min-h-screen max-w-2xl flex-col items-center p-4",
                        )}
                    >
                        <div className="flex h-full w-full max-w-2xl flex-col">
                            <Nav />
                            <div className="mt-14 sm:mt-20">{children}</div>
                            <Footer />
                        </div>
                    </main>
                </Providers>
            </body>
            <Analytics />
        </html>
    );
}
