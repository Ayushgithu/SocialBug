"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const WORDS = ["STRATEGY.", "CONTENT.", "GROWTH."];

export default function SplashScreen() {
    const [show, setShow] = useState(false);
    const [ready, setReady] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [phase, setPhase] = useState<"words" | "logo" | "done">("words");

    useEffect(() => {
        // const seen = sessionStorage.getItem("sb-splash-seen");
        // if (seen) {
        //     setReady(true);
        //     return;
        // }
        setShow(true);
        setReady(true);
    }, []);

    useEffect(() => {
        if (!show) return;
        if (phase !== "words") return;

        if (wordIndex < WORDS.length - 1) {
            const t = setTimeout(() => setWordIndex((i) => i + 1), 550);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => setPhase("logo"), 750);
            return () => clearTimeout(t);
        }
    }, [wordIndex, phase, show]);

    useEffect(() => {
        // setPhase("done");
        setTimeout(() => (setPhase("done"), setShow(false)), 3000);
    }, []);

    // function handleEnter() {
    //   alert("Welcome to SocialBug Media! Please note that this is a demo version of the website. Some features may not be fully functional or available. Enjoy exploring!");
    // sessionStorage.setItem("sb-splash-seen", "1");
    //   setPhase("done");
    //   setTimeout(() => setShow(false), 900);
    // }

    if (!ready) return <div className="fixed inset-0 z-[200] bg-sb-black" />;

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        clipPath: "circle(0% at 50% 50%)",
                        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
                    }}
                    style={{ clipPath: "circle(150% at 50% 50%)" }}
                    className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-sb-black"
                >
                    {/* floating node particles */}
                    <div className="pointer-events-none absolute inset-0">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <motion.span
                                key={i}
                                className="absolute h-1 w-1 rounded-full bg-sb-lime"
                                style={{
                                    top: `${(i * 37) % 100}%`,
                                    left: `${(i * 53) % 100}%`,
                                }}
                                animate={{
                                    opacity: [0.1, 0.9, 0.1],
                                    scale: [1, 1.8, 1],
                                }}
                                transition={{
                                    duration: 2 + (i % 5),
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                }}
                            />
                        ))}
                    </div>

                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,61,154,0.12),transparent_60%)]" />

                    <div className="relative flex flex-col items-center gap-8 px-6 text-center">
                        <AnimatePresence mode="wait">
                            {phase === "words" && (
                                <motion.h1
                                    key={WORDS[wordIndex]}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                        filter: "blur(6px)",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -30,
                                        filter: "blur(6px)",
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        ease: "easeOut",
                                    }}
                                    className="font-display text-[13vw] leading-none text-sb-white sm:text-8xl"
                                >
                                    {WORDS[wordIndex]}
                                </motion.h1>
                            )}

                            {phase !== "words" && (
                                <motion.div
                                    key="logo-block"
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="flex flex-col items-center gap-8"
                                >
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="relative h-28 w-28 sm:h-36 sm:w-36"
                                    >
                                        <Image
                                            src="/logo/socialbug-logo.png"
                                            alt="SocialBug Media"
                                            fill
                                            className="object-contain drop-shadow-[0_0_40px_rgba(255,61,154,0.45)]"
                                            priority
                                        />
                                    </motion.div>

                                    {/* <motion.button
                    onClick={handleEnter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    data-cursor="pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glow-border rounded-full bg-white/5 px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-sb-white backdrop-blur-md"
                  >
                    Enter The Hive →
                  </motion.button> */}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
