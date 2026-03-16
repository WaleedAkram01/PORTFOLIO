import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { fadeInUp } from '@/utils/animations';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const OWNER_EMAIL = 'waleedakramjarral@gmail.com';

const isWeb3FormsConfigured = Boolean(WEB3FORMS_ACCESS_KEY);

const contactInfo = [
    {
        icon: FaEnvelope,
        title: 'Email',
        value: OWNER_EMAIL,
        href: `mailto:${OWNER_EMAIL}`
    },
    {
        icon: FaPhone,
        title: 'Phone',
        value: '+92 3004969411',
        href: 'tel:923004969411'
    },
    {
        icon: FaMapMarkerAlt,
        title: 'Location',
        value: 'Lahore,Pakistan',
        href: '#'
    }
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        if (!isWeb3FormsConfigured) {
            setStatus('config-error');
            setTimeout(() => setStatus(''), 4000);
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: formData.name,
                    replyto: formData.email,
                    to_email: OWNER_EMAIL,
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Web3Forms request failed');
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        } catch (error) {
            console.error('Web3Forms send failed:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 4000);
        }
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Let's work together"
                />

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        {...fadeInUp}
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Let's create something{' '}
                                <span className="gradient-text">amazing together</span>
                            </h3>
                            <p className="text-gray-400">
                                Have a project in mind or just want to chat? Feel free to reach out.
                                I'm always open to discussing new opportunities and collaborations.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    className="flex items-center gap-4 glass-effect p-5 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 rounded-xl bg-primary-900/30 border border-primary-500/30 group-hover:border-primary-500/60 transition-colors">
                                        <info.icon className="text-xl text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">{info.title}</p>
                                        <p className="font-semibold text-white">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Decorative Element */}
                        <motion.div
                            className="mt-12 glass-effect p-8 rounded-2xl border border-primary-500/20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-400 italic">
                                "The best way to predict the future is to create it."
                            </p>
                            <p className="text-primary-400 font-semibold mt-2">- Let's build yours</p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Name</label>
                                <motion.input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 glass-effect rounded-xl border border-primary-500/20 focus:border-primary-500/60 focus:outline-none transition-all text-white placeholder-gray-500"
                                    placeholder="Your name"
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Email</label>
                                <motion.input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 glass-effect rounded-xl border border-primary-500/20 focus:border-primary-500/60 focus:outline-none transition-all text-white placeholder-gray-500"
                                    placeholder="your.email@example.com"
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Subject</label>
                                <motion.input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 glass-effect rounded-xl border border-primary-500/20 focus:border-primary-500/60 focus:outline-none transition-all text-white placeholder-gray-500"
                                    placeholder="Project inquiry"
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Message</label>
                                <motion.textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-6 py-4 glass-effect rounded-xl border border-primary-500/20 focus:border-primary-500/60 focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                                    placeholder="Tell me about your project..."
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    'Sending...'
                                ) : status === 'success' ? (
                                    'Message Sent!'
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Message
                                    </>
                                )}
                            </Button>

                            {status === 'success' && (
                                <motion.p
                                    className="text-green-400 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    Thank you! I'll get back to you soon.
                                </motion.p>
                            )}

                            {status === 'error' && (
                                <motion.p
                                    className="text-red-400 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    Message send nahi hua. Please dubara try karein.
                                </motion.p>
                            )}

                            {status === 'config-error' && (
                                <motion.p
                                    className="text-yellow-400 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    Web3Forms key missing hai. `.env` mein `VITE_WEB3FORMS_ACCESS_KEY` add karni hogi.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
        </section>
    );
};