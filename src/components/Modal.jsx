"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Modal({ children, isVisible, close }) {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    if (!isVisible) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={close}
        >
            {children}
        </motion.div>
    );
};

