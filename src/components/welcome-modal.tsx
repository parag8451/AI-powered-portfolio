'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importation correcte pour Next.js 13+
import { useState } from 'react';

// Added a trigger prop to accept custom triggers
interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialisation du router avec useRouter

  // Default trigger is the logo
  const defaultTrigger = (
    <Button
      variant="ghost"
      className="h-auto w-auto cursor-pointer rounded-2xl bg-gradient-to-r from-white/40 to-white/20 dark:from-neutral-800/50 dark:to-neutral-900/50 p-3 shadow-lg backdrop-blur-xl hover:bg-white/50 dark:hover:bg-neutral-700/50 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover-scale"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="/logo-parag.svg"
        width={100}
        height={100}
        alt="Logo"
        className="w-6 md:w-8 drop-shadow-lg"
      />
      <span className="sr-only">About Parag</span>
    </Button>
  );

  // Fonction qui utilise window.location pour forcer un rechargement complet
  const handleContactMe = () => {
    setIsOpen(false);
    // Forcer un rechargement complet de la page avec la requête
    window.location.href = '/chat?query=How%20can%20I%20contact%20you%3F';
  };

  return (
    <>
      {/* Use custom trigger if provided, otherwise use default */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background/95 backdrop-blur-xl z-52 max-h-[85vh] overflow-auto rounded-3xl border border-white/10 p-4 py-6 shadow-2xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[1000px] glass-effect-strong">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex h-full flex-col"
          >
            {/* Header with gradient background */}
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl mb-4">
              <div>
                <DialogTitle className="flex items-center gap-2 text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-cinematic-lg">
                  Welcome to Parag's AI Portfolio
                </DialogTitle>
                <DialogDescription className="mt-2 text-base text-cinematic">
                  {/*My interactive AI portfolio experience*/}
                </DialogDescription>
              </div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="sticky top-0 right-0 cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-2 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>
              </motion.div>
            </DialogHeader>

            {/* Content area with animated sections */}
            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              <motion.section
                className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 w-full space-y-8 rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {/* What section */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3 className="text-primary flex items-center gap-2 text-xl font-bold tracking-tight text-cinematic">
                    ✨ What's This?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed text-cinematic">
                    I'm so excited to present my{' '}
                    <strong className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-bold">
                      brand new AI Portfolio.
                    </strong>
                    <br /> Whether you're a recruiter, a friend, family member,
                    or just curious, feel free to ask anything you want!
                  </p>
                </motion.div>

                {/* Why section */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h3 className="text-primary flex items-center gap-2 text-xl font-bold tracking-tight text-cinematic">
                    🚀 Why This Design?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed text-cinematic">
                    Traditional portfolios can be limiting. <br /> They can't
                    adapt to every visitor's specific needs. <br /> My portfolio
                    becomes{' '}
                    <strong className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-bold">
                      exactly what you're interested in knowing about me and my work.
                    </strong>
                  </p>
                </motion.div>
              </motion.section>
            </div>

            {/* Footer with enhanced button */}
            <div className="flex flex-col items-center px-8 pt-4 pb-0 md:pb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setIsOpen(false)}
                  className="h-auto rounded-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
                  size="sm"
                >
                  Start Chatting 🎯
                </Button>
              </motion.div>
              <motion.div
                className="mt-6 flex cursor-pointer flex-wrap gap-1 text-center text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-muted-foreground text-cinematic">
                  If you love it, please share it! Feedback is always welcome.
                </p>
                <div className="flex cursor-pointer items-center text-blue-600 dark:text-blue-400 hover:underline transition-all duration-200 font-semibold"
                  onClick={handleContactMe}>
                  Contact me →
                </div>
              </motion.div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
