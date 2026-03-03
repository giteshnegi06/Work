import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
export default function Whatsaap() {
    return (
        <div className="fixed bottom-6 right-5 z-50">
            <a
                href="https://wa.me/919255195704"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Mahak Studio on WhatsApp"
            >
                {/* Desktop Button */}
                <div className="hidden lg:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition duration-300">
                    <FaWhatsapp className="text-2xl" />
                    <span className="text-lg font-medium">WhatsApp Us!</span>
                </div>

                {/* Mobile Floating Icon */}
                <div className="flex lg:hidden items-center justify-center bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition duration-300">
                    <FaWhatsapp className="text-3xl" />
                </div>
            </a>
        </div>
    )
}
