'use client';

import { motion as mo } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <mo.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
    >
      {children}
    </mo.div>
  );
}
