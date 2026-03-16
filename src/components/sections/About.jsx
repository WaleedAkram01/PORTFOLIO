import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';
import { FaCode, FaLaptopCode, FaRocket, FaPalette } from 'react-icons/fa';

const highlights = [
    {
        icon: FaCode,
        title: 'Clean Code',
        description: 'Writing maintainable, scalable, and efficient code'
    },
    {
        icon: FaLaptopCode,
        title: 'Responsive Design',
        description: 'Building seamless experiences across all devices'
    },
    {
        icon: FaRocket,
        title: 'Performance',
        description: 'Optimizing for speed and user experience'
    },
    {
        icon: FaPalette,
        title: 'Modern UI/UX',
        description: 'Creating beautiful and intuitive interfaces'
    }
];

export const About = () => {
    return (
        <section id="about" className="section-padding relative">
            <div className="container-custom">
                <SectionTitle title="About Me" subtitle="Get to know me" />

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image */}
                    <motion.div
                        className="relative"
                        {...slideInLeft}
                    >
                        <div className="relative glass-effect rounded-2xl overflow-hidden border border-primary-500/20 p-2">
                            <img
                                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&q=80"
                                alt="Developer workspace"
                                className="w-full h-[400px] object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                        </div>

                        {/* Floating Stats */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-2xl border border-primary-500/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">2+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        {...slideInRight}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Passionate about creating{' '}
                            <span className="gradient-text">amazing web experiences</span>
                        </h3>
                        <div className="space-y-4 text-gray-400">
                            <p>
                                I'm a full-stack developer with a passion for building beautiful,
                                functional, and user-friendly applications. With over 2+ years of
                                experience in web development, I've had the privilege of working
                                on diverse projects ranging from startups to enterprise applications.
                            </p>
                            <p>
                                My expertise lies in modern JavaScript frameworks, particularly
                                React and Node.js, combined with a strong understanding of UI/UX
                                principles. I believe in writing clean, maintainable code and
                                creating delightful user experiences.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies,
                                contributing to open-source projects, or sharing my knowledge
                                with the developer community.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-effect p-6 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <item.icon className="text-4xl text-primary-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
        </section>
    );
};