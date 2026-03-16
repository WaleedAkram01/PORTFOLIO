import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { skills } from '@/data/product';
import {
    FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaVuejs
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
    SiExpress, SiMongodb, SiPostgresql, SiFirebase,
    SiVercel, SiSvelte, SiGreensock
} from 'react-icons/si';

import { VscCode as SiVisualstudiocode } from 'react-icons/vsc';
import { TbBrandAws } from 'react-icons/tb';

const iconMap = {
    FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaVuejs,
    SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
    SiExpress, SiMongodb, SiPostgresql, SiFirebase,
    SiVisualstudiocode, SiVercel, SiSvelte, SiGreensock,
    TbBrandAws
};

const SkillCard = ({ skill, index }) => {
    const Icon = iconMap[skill.icon];

    return (
        <motion.div
            className="glass-effect p-6 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
        >
            <div className="flex items-center gap-4 mb-4">
                {Icon && (
                    <div className="p-3 rounded-xl bg-primary-900/30 border border-primary-500/30 group-hover:border-primary-500/60 transition-colors">
                        <Icon className="text-2xl text-primary-400" />
                    </div>
                )}
                <div className="flex-1">
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-dark-card rounded-full overflow-hidden">
                <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
};

export const Skills = () => {
    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <SectionTitle title="Skills & Expertise" subtitle="What I bring to the table" />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Frontend */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                                <FaReact className="text-2xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold gradient-text">Frontend</h3>
                        </div>
                        <div className="space-y-4">
                            {skills.frontend.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                                <FaNodeJs className="text-2xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold gradient-text">Backend</h3>
                        </div>
                        <div className="space-y-4">
                            {skills.backend.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                                <FaGitAlt className="text-2xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold gradient-text">Tools</h3>
                        </div>
                        <div className="space-y-4">
                            {skills.tools.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Frameworks */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                                <SiFramer className="text-2xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold gradient-text">Frameworks</h3>
                        </div>
                        <div className="space-y-4">
                            {skills.frameworks.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        </section>
    );
};