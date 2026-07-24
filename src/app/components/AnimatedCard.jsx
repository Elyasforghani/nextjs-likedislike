'use client'

import { Paper } from '@mui/material'
import { motion } from 'framer-motion'

export default function AnimatedCard({ children, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      style={{ width: '100%' }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          display: 'flex',
          borderRadius: 4,
          overflow: 'hidden',
          bgcolor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.01)',
            boxShadow: '0 25px 50px -12px rgba(0, 212, 255, 0.15)',
            borderColor: 'rgba(0, 212, 255, 0.3)',
          },
        }}
      >
        {children}
      </Paper>
    </motion.div>
  )
}