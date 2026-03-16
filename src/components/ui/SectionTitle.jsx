import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export const SectionTitle = ({ title, subtitle, align = 'center' }) => {
    const alignmentClasses = {
        center: 'text-center',
        left: 'text-left',
        right: 'text-right',
    };

    return (
        <motion.div
            className={`mb-16 ${alignmentClasses[align]}`}
            {...fadeInUp}
        >
            {subtitle && (
                <motion.p
                    className="text-accent-cyan font-semibold text-sm md:text-base mb-3 tracking-wider uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <span className="gradient-text">{title}</span>
            </motion.h2>
            <motion.div
                className={`h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-cyan ${align === 'center' ? 'mx-auto' : ''}`}
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            />
        </motion.div>
    );
};