"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, type PropsWithChildren } from "react";

export function AnimateStagger({ children }: PropsWithChildren) {
    const ref = useRef(null);
    const mainControls = useAnimation();
    return (
        <motion.div
            ref={ref}
            className=""
            initial="hidden"
            animate={mainControls}
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
