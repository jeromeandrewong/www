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
import Theme from "./theme";
import { navLinks } from "@/lib/data";

export default function Nav() {
    let segment = useSelectedLayoutSegment();
    if (segment === null) segment = "";
    return (
        <div className="flex justify-center">
            <NavigationMenu className="fixed mt-2 w-full rounded-md border-2 border-secondary/90 bg-primary/90  p-2 dark:bg-dark_primary/90">
                <NavigationMenuList>
                    {navLinks.map((item) => {
                        return (
                            <NavigationMenuItem key={item.title}>
                                <Link aria-label={item.title} href={item.href}>
                                    <div
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            item.href === `/${segment}`
                                                ? "bg-secondary/20  underline decoration-wavy underline-offset-4 dark:bg-secondary/30"
                                                : "",
                                        )}
                                    >
                                        <item.icon />
                                    </div>
                                </Link>
                            </NavigationMenuItem>
                        );
                    })}
                    <NavigationMenuItem>
                        <Theme />
                    </NavigationMenuItem>
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
                        "hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
