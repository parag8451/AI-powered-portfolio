'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import { SparklesCore } from '@/components/ui/sparkles';
import WelcomeModal from '@/components/welcome-modal';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Fun: 'What’s the craziest thing you’ve ever done? What are your hobbies?',
  Contact: 'How can I contact you?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Fun', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);

  /* Cinematic hero animations */
  const topElementVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -60,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };
  const bottomElementVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.9, 
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  /* Image animation with floating effect */
  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 1,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  /* Button stagger animation */
  const buttonContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  useEffect(() => {
    // Preload critical assets in the background
    const img = new window.Image();
    img.src = '/landing-memojis.png';

    const profileImg = new window.Image();
    profileImg.src = '/profile-parag.jpg';
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <motion.div
          className="hidden bg-gradient-to-b from-purple-500/15 via-blue-500/10 to-transparent bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem] animate-cinematic-fade"
          style={{ marginBottom: '-2.5rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Parag
        </motion.div>
      </div>

      {/* GitHub button */}
      <div className="absolute top-6 right-8 z-20 flex items-center gap-2">
        <ThemeToggle />
        <GithubButton
          //targetStars={69}
          animationDuration={1.5}
          label="Star"
          size={'sm'}
          repoUrl="https://github.com/parag8451"
        />
      </div>

      <div className="absolute top-6 left-6 z-20">
        <motion.button
          onClick={() => goToChat('Are you looking for an internship?')}
          className="relative flex cursor-pointer items-center gap-2 rounded-full border border-white/20 dark:border-white/20 bg-gradient-to-r from-white/40 to-white/20 dark:from-neutral-800/50 dark:to-neutral-900/50 px-4 py-1.5 text-sm font-semibold text-black shadow-lg backdrop-blur-xl transition-all hover:bg-white/50 dark:text-white dark:hover:bg-neutral-800/50 hover:shadow-xl hover:shadow-purple-500/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Green pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Looking for a talent?
        </motion.button>
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="z-100">
          <WelcomeModal />
        </div>

        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl animate-cinematic-fade text-cinematic">
          Hey, I&apos;m Parag Anabhavane 👋
        </h2>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-cinematic-up text-cinematic-lg tracking-tight">
          AI Powered Portfolio
        </h1>
        <motion.p
          className="mt-2 text-sm text-muted-foreground max-w-md mx-auto md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Ask my AI anything — it knows my skills, projects &amp; story.
        </motion.p>
      </motion.div>

      {/* centre memoji with glow effect */}
      <motion.div 
        className="relative z-10 mt-1 w-48 sm:w-64 md:w-72 drop-shadow-2xl animate-float"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 animate-glow-pulse"></div>
        {/* Sparkle particles behind memoji */}
        <div className="absolute -inset-8 -z-5 opacity-60">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={40}
            particleColor="#8B5CF6"
            speed={0.8}
          />
        </div>
        <Image
          src="/landing-memojis.png"
          alt="Hero memoji"
          width={500}
          height={500}
          priority
          className="h-auto w-full object-contain drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
        />
      </motion.div>

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        {/* free-form question */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 backdrop-blur-xl py-2.5 pr-2 pl-6 transition-all hover:border-neutral-300 hover:bg-white/40 dark:border-neutral-700 dark:bg-neutral-800/50 dark:hover:border-purple-500/50 dark:hover:bg-neutral-900/50 shadow-lg hover:shadow-xl hover:shadow-purple-500/20">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-400 font-medium"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 text-white transition-all hover:shadow-lg hover:shadow-purple-500/50 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed dark:from-blue-500 dark:to-purple-500"
            >
              <ArrowRight  className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* quick-question grid with staggered animations */}
        <motion.div 
          className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5"
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <motion.div key={key} variants={buttonVariants}>
              <Button
                onClick={() => goToChat(questions[key])}
                variant="outline"
                className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:p-10 hover-lift hover-glow transition-all duration-300 hover:border-purple-400/50 dark:hover:border-purple-500/50 dark:hover:bg-neutral-900/50"
              >
                <div className="flex h-full flex-col items-center justify-center gap-1 text-gray-700 dark:text-gray-100">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Icon size={22} strokeWidth={2} color={color} />
                  </motion.div>
                  <span className="text-xs font-medium sm:text-sm text-cinematic">{key}</span>
                </div>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <FluidCursor />
    </div>
  );
}
