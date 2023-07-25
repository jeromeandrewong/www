"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useSelectedLayoutSegment } from "next/navigation";

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Experiences",
        href: "/experiences",
    },
    {
        title: "Blog",
        href: "/blog",
    },
];
export default function Nav() {
    let segment = useSelectedLayoutSegment();
    if (segment === null) segment = "";
    return (
        <div className="flex justify-center">
            <NavigationMenu className="p-2 w-full fixed  rounded-md mt-2 border-2 border-secondary">
                <NavigationMenuList>
                    {navItems.map((item, idx) => {
                        return (
                            <NavigationMenuItem key={item.title}>
                                <Link href={item.href}>
                                    <div
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            item.href === `/${segment}`
                                                ? "bg-primary_text dark:bg-dark_primary"
                                                : "",
                                        )}
                                    >
                                        {item.title}
                                    </div>
                                </Link>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
