'use client'

import React, { useState } from 'react'
import { Box, IconButton, Typography, Tooltip, Zoom } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import { motion, AnimatePresence } from 'framer-motion'

export default function Clientlike() {
  const [status, setStatus] = useState(null)

  const handleLike = () => {
    setStatus((prev) => (prev === 'like' ? null : 'like'))
  }

  const handleDislike = () => {
    setStatus((prev) => (prev === 'dislike' ? null : 'dislike'))
  }

  return (
    <Box
      sx={{
        width: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
        borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
        bgcolor: 'rgba(255, 255, 255, 0.02)',
        p: 2,
      }}
    >
      <Tooltip title="Like" arrow placement="left">
        <IconButton
          onClick={handleLike}
          sx={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            bgcolor: status === 'like' 
              ? 'rgba(0, 212, 255, 0.15)' 
              : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${status === 'like' 
              ? 'rgba(0, 212, 255, 0.5)' 
              : 'rgba(255, 255, 255, 0.1)'}`,
            '&:hover': {
              bgcolor: 'rgba(0, 212, 255, 0.2)',
              transform: 'scale(1.1)',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
            },
          }}
        >
          <ThumbUpIcon 
            sx={{ 
              fontSize: 20,
              color: status === 'like' ? '#00d4ff' : 'rgba(255,255,255,0.5)',
              transition: 'color 0.3s',
            }} 
          />
        </IconButton>
      </Tooltip>

      <AnimatePresence mode="wait">
        <motion.div
          key={status || 'neutral'}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Typography 
            variant="caption" 
            sx={{ 
              fontWeight: 600,
              color: status === 'like' 
                ? '#00d4ff' 
                : status === 'dislike' 
                  ? '#ff6b9d' 
                  : 'rgba(255,255,255,0.4)',
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {status === 'like' ? 'Liked' : status === 'dislike' ? 'Disliked' : 'Rate'}
          </Typography>
        </motion.div>
      </AnimatePresence>

      <Tooltip title="Dislike" arrow placement="left">
        <IconButton
          onClick={handleDislike}
          sx={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            bgcolor: status === 'dislike' 
              ? 'rgba(255, 107, 157, 0.15)' 
              : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${status === 'dislike' 
              ? 'rgba(255, 107, 157, 0.5)' 
              : 'rgba(255, 255, 255, 0.1)'}`,
            '&:hover': {
              bgcolor: 'rgba(255, 107, 157, 0.2)',
              transform: 'scale(1.1)',
              boxShadow: '0 0 20px rgba(255, 107, 157, 0.3)',
            },
          }}
        >
          <ThumbDownIcon 
            sx={{ 
              fontSize: 20,
              color: status === 'dislike' ? '#ff6b9d' : 'rgba(255,255,255,0.5)',
              transition: 'color 0.3s',
            }} 
          />
        </IconButton>
      </Tooltip>
    </Box>
  )
}