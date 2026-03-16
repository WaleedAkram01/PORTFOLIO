import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/animations';

export const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    href,
    ...props
}) => {
    const baseStyles = "px-8 py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 relative overflow-hidden group";

    const variants = {
        primary: "bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/50 hover:shadow-primary-500/70",
        secondary: "glass-effect hover:bg-white/10 text-white border border-primary-500/30 hover:border-primary-500/60",
        accent: "bg-gradient-to-r from-accent-cyan to-accent-purple hover:from-accent-purple hover:to-accent-cyan text-white shadow-lg",
    };

    const Component = href ? motion.a : motion.button;
    const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <Component
            className={cn(baseStyles, variants[variant], className)}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...linkProps}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2 justify-center">
                {children}
            </span>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
            />
        </Component>
    );
};