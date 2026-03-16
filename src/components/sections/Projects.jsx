import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '@/data/product';

const categories = ['All', 'Web Application', 'Full Stack', 'EdTech', 'Agency Website', 'Enterprise'];

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="section-padding relative">
            <div className="container-custom">
                <SectionTitle
                    title="Featured Projects"
                    subtitle="My recent work"
                />

                {/* Filter Buttons */}
                <motion.div
                    className="flex flex-wrap gap-3 justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeFilter === category
                                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/50'
                                : 'glass-effect text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    layout
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-gray-400 text-lg">No projects found in this category.</p>
                    </motion.div>
                )}

                {/* View More Button */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block glass-effect px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all border border-primary-500/30 hover:border-primary-500/60"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View More on GitHub
                    </motion.a>
                </motion.div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        </section>
    );
};