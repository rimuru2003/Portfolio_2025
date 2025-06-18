"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);

    const MouseX = useRef(0)
    const MouseY = useRef(0)
    const TrailX = useRef(0)
    const TrailY = useRef(0)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            MouseX.current = e.clientX
            MouseY.current = e.clientY
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`
                cursorRef.current.style.top = `${e.clientY}px`
            }
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])
    useEffect(() => {
        const handleTrailMove = () => {
            TrailX.current += (MouseX.current - TrailX.current) * 0.1;
            TrailY.current += (MouseY.current - TrailY.current) * 0.1;

            if (trailRef.current) {
                trailRef.current.style.left = `${TrailX.current}px`
                trailRef.current.style.top = `${TrailY.current}px`

            }
            requestAnimationFrame(handleTrailMove)
        }
        handleTrailMove()
        
    }, [])
    return (
        <>
            {/* Cursor dot */}
            <div
                ref={cursorRef}
                className="fixed z-[10000] w-[6px] h-[6px] bg-sky-500 rounded-full pointer-events-none"
                style={{ transform: "translate(-50%, -50%)" }}
            />

            {/* Trail circle - soft sky blue with glow */}
            <div
                ref={trailRef}
                className="w-12 h-12 bg-sky-400/20 shadow shadow-sky-400/20 rounded-full fixed pointer-events-none z-[9999]"
                style={{ transform: "translate(-50%, -50%)" }}
            />
        </>

    );
};

export default CustomCursor;
