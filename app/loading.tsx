export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="flex h-[50vh] items-center justify-center">
            <div className="relative flex w-10 justify-between">
                <div className="block h-2 w-2 animate-[pulse2_1.3s_ease-in-out_infinite] rounded-full bg-primary_text dark:bg-dark_primary_text"></div>
                <div className="block h-2 w-2 animate-[pulse2_1.3s_ease-in-out_0.1625s_infinite] rounded-full bg-primary_text dark:bg-dark_primary_text"></div>
                <div className="block h-2 w-2 animate-[pulse2_1.3s_ease-in-out_0.39s_infinite] rounded-full bg-primary_text dark:bg-dark_primary_text"></div>
            </div>
        </div>
    );
}
