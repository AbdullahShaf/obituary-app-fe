"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ArrowLeft from "../../../public/lokalni/left.png";
import ArrowRight from "../../../public/lokalni/right.png";

const partners = [
    { name: "QR KODE", link: "https://www.partner1.com" },
    { name: "KAMNOSEŠTVO", link: "https://www.partner2.com" },
    { name: "GRAVERSTVO", link: "https://www.partner3.com" },
    { name: "NALEPKE", link: "https://www.partner3.com" },
    { name: "SEDMINA", link: "https://www.partner3.com" },
    { name: "QR KODE", link: "https://www.partner1.com" },
    { name: "KAMNOSEŠTVO", link: "https://www.partner2.com" },
];

export default function LocalPartnersCarousal() {
    return <LocalCarousal partners={partners} />;
}

const VISIBLE_COUNT = 5;

const LocalCarousal = ({ partners }) => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const total = partners.length;
    const infinite = total > VISIBLE_COUNT;

    const resumeTimeout = useRef(null);

    const pauseAuto = () => {
        setIsPaused(true);

        if (resumeTimeout.current) clearTimeout(resumeTimeout.current);

        resumeTimeout.current = setTimeout(() => {
            setIsPaused(false);
        }, 6000);
    };

    // Visible items
    const getVisibleItems = () => {
        if (!infinite) return partners;

        return Array.from({ length: VISIBLE_COUNT }, (_, i) =>
            partners[(index + i) % total]
        );
    };

    const next = () => {
        if (!infinite) return;
        pauseAuto();
        setIndex((prev) => (prev + 1) % total);
    };

    const prev = () => {
        if (!infinite) return;
        pauseAuto();
        setIndex((prev) => (prev - 1 + total) % total);
    };

    // Auto-loop every 4 seconds ONLY when not paused
    useEffect(() => {
        if (!infinite || isPaused) return;

        const t = setInterval(() => {
            setIndex((prev) => (prev + 1) % total);
        }, 4000);

        return () => clearInterval(t);
    }, [infinite, isPaused]);

    return (
        <div className="flex flex-col items-start justify-center gap-6 w-[750px]">

            {/* Carousel */}
            <div className="overflow-hidden w-[750px] py-3">
                <motion.div
                    key={index}
                    animate={{ x: [150, 0] }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-row gap-4"
                    style={{ width: "max-content" }}
                >
                    {getVisibleItems().map((item, i) => (
                        <LocalPartnersCarousalItem key={i} {...item} />
                    ))}
                </motion.div>
            </div>

            {/* Nav Buttons */}
            <div className="flex flex-row items-center justify-end w-full gap-8 mb-10">
                <img
                    src={ArrowLeft.src}
                    alt="arrow-left"
                    className="hover:cursor-pointer w-4"
                    onClick={prev}
                />
                <img
                    src={ArrowRight.src}
                    alt="arrow-right"
                    className="hover:cursor-pointer w-4"
                    onClick={next}
                />
            </div>
        </div>
    );
};

const LocalPartnersCarousalItem = ({ name, link }) => {
    return (
        <div
            className="border border-[#B9B9B9] border-[2px] px-4 py-2 bg-[#3B3B3B]
                   text-lg text-[#B9B9B9] uppercase rounded-sm min-w-[150px]
                   flex justify-center items-center"
        >
            <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        </div>
    );
};
