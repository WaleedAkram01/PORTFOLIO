import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { scaleIn } from '@/utils/animations';

export const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative group card-tilt"
            {...scaleIn}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -10 }}
        >
            <div className="glass-effect rounded-2xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-primary-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold">
                        {project.category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 gradient-text">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-primary-900/30 border border-primary-500/30 rounded-full text-xs text-primary-300 font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-accent-cyan hover:text-accent-neon transition-colors font-medium"
                            whileHover={{ x: 5 }}
                        >
                            <FaExternalLinkAlt />
                            Live Demo
                        </motion.a>
                        {project.github !== '#' && (
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
                                whileHover={{ x: 5 }}
                            >
                                <FaGithub />
                                Code
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 opacity-0 pointer-events-none rounded-2xl"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    );
};