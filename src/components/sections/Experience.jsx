import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { experience } from '@/data/product';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
        >
            <div className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="glass-effect p-6 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary-900/30 border border-primary-500/30">
                                    {item.company === 'Self-Taught' ? (
                                        <FaGraduationCap className="text-xl text-primary-400" />
                                    ) : (
                                        <FaBriefcase className="text-xl text-primary-400" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-accent-cyan font-medium">{item.company}</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-4">{item.description}</p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-primary-900/30 border border-primary-500/30 rounded-full text-xs text-primary-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center">
                    <motion.div
                        className="w-4 h-4 rounded-full bg-primary-500 shadow-lg shadow-primary-500/50 z-10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                    />
                </div>

                {/* Year */}
                <div className="flex-1">
                    <motion.div
                        className={`${isEven ? 'md:text-left' : 'md:text-right'}`}
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                    >
                        <span className="inline-block glass-effect px-6 py-3 rounded-full font-bold text-primary-400">
                            {item.year}
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Connecting Line */}
            {index < experience.length - 1 && (
                <motion.div
                    className="hidden md:block absolute left-1/2 top-12 w-0.5 h-32 bg-gradient-to-b from-primary-500/50 to-transparent transform -translate-x-1/2"
                    initial={{ height: 0 }}
                    whileInView={{ height: 128 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                />
            )}
        </motion.div>
    );
};

export const Experience = () => {
    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <SectionTitle
                    title="Experience & Journey"
                    subtitle="My professional path"
                />

                <div className="max-w-5xl mx-auto">
                    {/* Timeline */}
                    <div className="relative space-y-16">
                        {/* Center Line for Desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-primary-500/20 transform -translate-x-1/2" />

                        {experience.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>

                    {/* End Badge */}
                    <motion.div
                        className="flex justify-center mt-16"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-effect px-8 py-4 rounded-full border border-primary-500/30 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                            <span className="font-semibold">Currently building amazing things</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        </section>
    );
};