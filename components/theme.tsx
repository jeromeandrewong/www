import { useTheme } from "next-themes";
import React from "react";
import { Moon, Sun } from "lucide-react";

const Theme = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = (theme: string) => {
        if (theme === "light") {
            setTheme("light");
        } else if (theme === "dark") {
            setTheme("dark");
        } else {
            setTheme("system");
        }
    };

    return (
        <div
            className=" rounded-md bg-white  p-2 transition duration-200 hover:bg-secondary/20 dark:bg-black dark:hover:bg-secondary/30"
            onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
            }}
        >
            {theme === "light" ? <Moon /> : <Sun />}
        </div>
    );
};

export default Theme;
