'use client'

import React from 'react'
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Chip,
  Fade,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import CodeIcon from '@mui/icons-material/Code'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/Elyasforghani', color: '#ffffff' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/alireza-forghani-b4746b263/', color: '#0a66c2' },
   
    { icon: <EmailIcon />, label: 'Email', href: 'mailto:elyasfgidev@example.com', color: '#ea4335' },
  ]

  const techStack = ['React', 'Next.js', 'Tailwind', 'JavaScript', 'MUI']

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        mt: 8,
        py: 6,
        px: { xs: 3, md: 6 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), rgba(255, 107, 157, 0.5), transparent)',
        },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 300,
          background: 'radial-gradient(ellipse, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          maxWidth: 800,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Avatar with Glow Ring */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: -3,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00d4ff, #ff6b9d)',
                opacity: 0.6,
                filter: 'blur(8px)',
                animation: 'pulse 3s ease-in-out infinite',
              },
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
                '50%': { opacity: 0.8, transform: 'scale(1.05)' },
              },
            }}
          >
            <Avatar
              src="/profile.jpg"
              alt="Elyas Forghani"
              sx={{
                width: 80,
                height: 80,
                border: '3px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)',
              }}
            />
          </Box>
        </motion.div>

        {/* Name & Title */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #00d4ff 0%, #ff6b9d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 0.5,
            }}
          >
            Elyas Forghani
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
            <CodeIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            Frontend Developer & UI Enthusiast
          </Typography>
        </Box>

        {/* Bio */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            maxWidth: 450,
            lineHeight: 1.7,
            fontSize: '0.9rem',
          }}
        >
          Crafting beautiful, performant web experiences with modern technologies. 
          Passionate about clean code and intuitive design.
        </Typography>

        {/* Tech Stack Chips */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
          {techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                bgcolor: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                color: '#00d4ff',
                fontWeight: 600,
                fontSize: '0.75rem',
                '&:hover': {
                  bgcolor: 'rgba(0, 212, 255, 0.2)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s',
              }}
            />
          ))}
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: 'flex', gap: 1.5, mt: 1 }}>
          {socialLinks.map((social) => (
            <Tooltip key={social.label} title={social.label} arrow>
              <IconButton
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    bgcolor: `${social.color}20`,
                    borderColor: `${social.color}50`,
                    color: social.color,
                    transform: 'translateY(-4px) scale(1.1)',
                    boxShadow: `0 8px 25px ${social.color}30`,
                  },
                }}
              >
                {social.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>

        {/* Divider Line */}
        <Box
          sx={{
            width: '60%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            my: 1,
          }}
        />

        {/* Copyright */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            opacity: 0.6,
          }}
        >
          Built with{' '}
          <FavoriteIcon
            sx={{
              fontSize: 14,
              color: '#ff6b9d',
              animation: 'heartbeat 1.5s ease-in-out infinite',
              '@keyframes heartbeat': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.2)' },
              },
            }}
          />{' '}
          by Elyas Forghani &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  )
}