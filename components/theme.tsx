"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Theme = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }
    return (
        <div
            className="rounded-md bg-white p-2  transition duration-200 hover:cursor-pointer hover:bg-secondary/20 dark:bg-black dark:hover:bg-secondary/30"
            onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
            }}
        >
            {theme === "light" ? <Moon /> : <Sun />}
        </div>
    );
};

export default Theme;
