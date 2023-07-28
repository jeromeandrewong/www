"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, type PropsWithChildren } from "react";

export function AnimateStagger({ children }: PropsWithChildren) {
    const ref = useRef(null);
    const mainControls = useAnimation();
    return (
        <motion.div
            ref={ref}
            className="grid grid-cols-2 gap-3 xl:grid-cols-3"
            initial="hidden"
            animate={mainControls}
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.25,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
