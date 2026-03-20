import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const PROFILE_IMAGE = '/waleed%20image.jpeg';

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-[100svh] pt-24 md:pt-28 flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 animated-gradient opacity-50" />
            <div className="absolute inset-0 grid-pattern" />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="particle absolute"
                    style={{
                        width: Math.random() * 10 + 5,
                        height: Math.random() * 10 + 5,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Content */}
            <motion.div
                className="container-custom px-6 pb-12 md:pb-8 relative z-10"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <motion.div
                        className="inline-flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full mb-4 md:mb-6"
                        {...fadeInUp}
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm md:text-base font-medium">Available for opportunities</span>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="mb-5 md:mb-7 relative"
                        {...fadeInUp}
                        transition={{ delay: 0.15 }}
                    >
                        <div className="absolute inset-0 mx-auto w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-accent-cyan/30 blur-2xl" />
                        <div className="relative mx-auto w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-br from-primary-500 via-accent-cyan to-accent-purple shadow-[0_0_45px_rgba(34,211,238,0.35)]">
                            <div className="w-full h-full rounded-full bg-dark-bg/60 p-[3px]">
                                <img
                                    src={PROFILE_IMAGE}
                                    alt="Waleed Akram"
                                    className="w-full h-full rounded-full object-cover object-top"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        Hi, I'm{' '}
                        <span className="gradient-text font-display">Waleed </span>
                        <motion.span
                            className="inline-block"
                            animate={{ rotate: [0, 14, -8, 14, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                        >
                            👋
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        className="text-xl md:text-3xl font-semibold mb-3 md:mb-4 text-gray-300"
                        {...fadeInUp}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="gradient-text">Full Stack Developer</span> &{' '}
                        <span className="gradient-text">UI/UX Enthusiast</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-7 md:mb-9"
                        {...fadeInUp}
                        transition={{ delay: 0.4 }}
                    >
                        I craft exceptional digital experiences with modern technologies.
                        Specialized in building responsive web applications that combine
                        beautiful design with powerful functionality.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 justify-center mb-8 md:mb-10"
                        {...fadeInUp}
                        transition={{ delay: 0.5 }}
                    >
                        <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View My Work
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Get In Touch
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex gap-4 justify-center"
                        {...fadeInUp}
                        transition={{ delay: 0.6 }}
                    >
                        {[
                            { icon: FaGithub, href: 'https://github.com/WaleedAkram01', label: 'GitHub' },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full glass-effect hover:bg-primary-500/20 text-gray-300 hover:text-accent-cyan transition-all"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                <social.icon className="text-xl" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-5 md:bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <FaArrowDown className="text-2xl text-primary-500" />
                </motion.div>
            </motion.div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </section>
    );
};