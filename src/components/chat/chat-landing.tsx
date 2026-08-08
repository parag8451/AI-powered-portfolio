'use client';

import { motion, type Variants } from 'framer-motion';
import { Award, Code, Mail, MessageSquare, Sparkles } from 'lucide-react';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
}

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery }) => {
  const suggestedQuestions = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      text: 'Who are you?',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      border: 'hover:border-blue-400/40',
      iconBg: 'bg-blue-500/10',
    },
    {
      icon: <Code className="h-4 w-4" />,
      text: 'What projects have you worked on?',
      gradient: 'from-green-500/10 to-emerald-500/10',
      border: 'hover:border-green-400/40',
      iconBg: 'bg-green-500/10',
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: 'What are your skills?',
      gradient: 'from-purple-500/10 to-violet-500/10',
      border: 'hover:border-purple-400/40',
      iconBg: 'bg-purple-500/10',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'How can I contact you?',
      gradient: 'from-amber-500/10 to-orange-500/10',
      border: 'hover:border-amber-400/40',
      iconBg: 'bg-amber-500/10',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Welcome message */}
      <motion.div className="mb-8 text-center" variants={itemVariants}>
        <motion.div
          className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-purple-200/50 bg-purple-50/50 px-4 py-1.5 text-xs font-medium text-purple-600 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Sparkles className="h-3 w-3" />
          AI-Powered Conversation
        </motion.div>
        <h2 className="mb-2 bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-neutral-400">
          I&apos;m Parag&apos;s digital twin
        </h2>
        <p className="text-muted-foreground mx-auto max-w-md text-sm">
          The first portfolio that fits <span className="font-semibold text-purple-600 dark:text-purple-400">YOUR</span> needs. Ask me anything.
        </p>
      </motion.div>

      {/* Suggested questions */}
      <motion.div
        className="w-full max-w-md space-y-2.5"
        variants={containerVariants}
      >
        {suggestedQuestions.map((question, index) => (
          <motion.button
            key={index}
            className={`group flex w-full items-center rounded-xl border border-neutral-200/60 bg-gradient-to-r ${question.gradient} px-4 py-3.5 backdrop-blur-sm transition-all duration-300 dark:border-neutral-700/50 ${question.border}`}
            onClick={() => submitQuery(question.text)}
            variants={itemVariants}
            whileHover={{ scale: 1.015, x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={`mr-3.5 rounded-lg ${question.iconBg} p-2 transition-transform duration-300 group-hover:scale-110`}>
              {question.icon}
            </span>
            <span className="text-left text-sm font-medium">{question.text}</span>
            <motion.span
              className="ml-auto text-neutral-400"
              initial={{ opacity: 0, x: -4 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              →
            </motion.span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ChatLanding;
