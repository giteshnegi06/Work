import React, { useEffect, useState } from "react";

/**
 * Mahak Studio — Luxury Loading Screen
 * Shows on first paint until the app signals it is ready.
 * Fades out after `minDuration` ms or when `onDone` is called.
 */
export default function LoadingScreen({ onDone }) {
    const [hiding, setHiding] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        // Always show at least 1.8 s so the animation plays nicely
        const timer = setTimeout(() => {
            setHiding(true);
            setTimeout(() => {
                setHidden(true);
                if (onDone) onDone();
            }, 700); // fade-out duration
        }, 1800);

        return () => clearTimeout(timer);
    }, []); // Run only once on mount

    if (hidden) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "28px",
                transition: "opacity 0.7s ease",
                opacity: hiding ? 0 : 1,
                pointerEvents: hiding ? "none" : "all",
            }}
        >
            {/* Camera Shutter Ring */}
            <div style={{ position: "relative", width: 96, height: 96 }}>
                {/* Outer spinning ring */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        border: "2px solid transparent",
                        borderTopColor: "#fff",
                        borderRightColor: "rgba(255,255,255,0.3)",
                        animation: "ms-spin 1.2s linear infinite",
                    }}
                />
                {/* Inner pulsing ring */}
                <div
                    style={{
                        position: "absolute",
                        inset: 8,
                        borderRadius: "50%",
                        border: "1.5px solid rgba(255,255,255,0.15)",
                        animation: "ms-pulse 2s ease-in-out infinite",
                    }}
                />
                {/* Logo / Camera icon centre */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="Mahak Studio"
                        style={{ width: 52, height: 52, objectFit: "contain", borderRadius: "50%" }}
                    />
                </div>
            </div>

            {/* Studio name */}
            <div style={{ textAlign: "center" }}>
                <p
                    style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(22px, 5vw, 32px)",
                        color: "#fff",
                        letterSpacing: "0.18em",
                        margin: 0,
                        animation: "ms-fade-in 0.8s ease forwards",
                    }}
                >
                    MAHAK STUDIO
                </p>
                <p
                    style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(11px, 2vw, 13px)",
                        color: "rgba(255,255,255,0.45)",
                        letterSpacing: "0.35em",
                        margin: "6px 0 0 0",
                        textTransform: "uppercase",
                        animation: "ms-fade-in 1.2s ease forwards",
                    }}
                >
                    Wedding Photography &amp; Films
                </p>
            </div>

            {/* Thin progress bar */}
            <div
                style={{
                    width: "clamp(120px, 40vw, 200px)",
                    height: 1,
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: 1,
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, #fff, transparent)",
                        animation: "ms-progress 1.8s ease-in-out forwards",
                    }}
                />
            </div>

            {/* Keyframe styles — injected inline to avoid CSS file dependency */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');

        @keyframes ms-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes ms-pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes ms-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ms-progress {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>
        </div>
    );
}
