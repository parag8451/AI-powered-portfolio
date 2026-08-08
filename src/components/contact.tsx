'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, Instagram, MapPin } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'paraganabhavane18@gmail.com',
      href: 'mailto:paraganabhavane18@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+91 8451862877',
      href: 'tel:+918451862877',
      color: 'text-green-600'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Mumbai, India',
      href: '#',
      color: 'text-purple-600'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'parag-anabhavane01',
      href: 'https://www.linkedin.com/in/parag-anabhavane01',
      color: 'text-blue-700'
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub',
      value: 'parag8451',
      href: 'https://github.com/parag8451',
      color: 'text-gray-800 dark:text-gray-200'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: 'Instagram',
      value: 'parag1617',
      href: 'https://www.instagram.com/parag1617',
      color: 'text-pink-600'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="space-y-6">
      <motion.div 
        className="text-center space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-cinematic-lg">Get in Touch</h2>
        <p className="text-muted-foreground text-cinematic">
          I'm always excited to connect with fellow tech enthusiasts, discuss opportunities, or just chat about the latest in AI and data science!
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactInfo.map((contact, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="hover:shadow-xl transition-all duration-300 hover:border-purple-400/50 dark:hover:border-purple-500/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className={`p-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 ${contact.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-medium mb-3 text-cinematic">
                  {contact.value}
                </CardDescription>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(contact.href, '_blank')}
                  >
                    {contact.title === 'Location' ? 'View on Map' : `Open ${contact.title}`}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center space-y-4 pt-6">
        <div className="bg-accent rounded-lg p-6">
          <h3 className="font-semibold mb-2">What I'm Looking For</h3>
          <p className="text-sm text-muted-foreground">
            • Data Science & AI opportunities • AI Automation projects • Full-stack development roles • 
            Open source contributions • Tech community connections
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Feel free to reach out for collaborations, job opportunities, or just to discuss the latest in tech! 
          I'm particularly interested in projects that combine AI/ML with real-world impact.
        </p>
      </div>
    </div>
  );
}
