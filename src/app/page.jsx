import Image from 'next/image'
import React from 'react'
import Clientlike from './clientlike'
import Footer from './components/Footer'
import AnimatedCard from './components/AnimatedCard'
import { 
  Box, 
  Typography, 
  Chip, 
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

async function getData(url) {
  const res = await fetch(url, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default async function App() {
  const data = await getData('https://6a5a56c4ad8332e75f026853.mockapi.io/posts-en')

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden',  }}>
      {/* Emerald Orb Background */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -3,
          backgroundColor: '#08090c',
          backgroundImage: `
            radial-gradient(circle at 8% 18%, rgba(0, 230, 138, 0.35), transparent 28%),
            radial-gradient(circle at 82% 15%, rgba(16, 185, 129, 0.24), transparent 28%),
            radial-gradient(circle at 38% 60%, rgba(0, 184, 212, 0.2), transparent 30%),
            radial-gradient(circle at 20% 72%, rgba(245, 158, 11, 0.12), transparent 24%),
            linear-gradient(180deg, rgba(8, 9, 12, 1) 0%, rgba(5, 6, 7, 1) 100%)
          `,
          filter: 'blur(20px)',
          animation: 'orbDrift 24s ease-in-out infinite alternate',
          '@keyframes orbDrift': {
            '0%': { transform: 'translate(0, 0) scale(1)' },
            '33%': { transform: 'translate(45px, -30px) scale(1.05)' },
            '66%': { transform: 'translate(-25px, 45px) scale(0.96)' },
            '100%': { transform: 'translate(30px, 20px) scale(1.02)' },
          },
        }}
      />

      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -2,
          pointerEvents: 'none',
          opacity: 0.025,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '128px 128px',
        }}
      />

      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          opacity: 0.025,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Header */}
      <Box sx={{ textAlign: 'center', pt: 6, pb: 4, px: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(135deg, #00d4ff 0%, #ff6b9d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1,
            letterSpacing: '-0.03em',
            fontSize: { xs: '2rem', md: '3.75rem' },
          }}
        >
          Discover products you'll love
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Curated picks and premium finds for your everyday style
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          px: { xs: 2, md: 4 },
          pb: 8,
          maxWidth: 900,
          mx: 'auto',
        }} >
        {data?.map((val, i) => (
          <AnimatedCard key={val.id} index={i}>
            <Fig src={val.img} city={val.city} price={val.price} />
            <Desc city={val.city} desc={val.desc} />
            <Clientlike />
          </AnimatedCard>
        ))}
      </Box>

      <Footer />
    </Box>
  )
}

function Fig({ src, city, price }) {
  return (
    <Box
      sx={{
        width: { xs: '40%', md: '35%' },
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, transparent 60%, rgba(10, 14, 39, 0.8))',
        },
      }}
    >
      <Image
        src={src}
        alt={city}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 40vw, 35vw"
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 12,
          left: 12,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          px: 1.5,
          py: 0.5,
          borderRadius: 2,
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: '#00d4ff',
            fontWeight: 700,
            fontSize: '0.85rem',
          }}
        >
          ${price}
        </Typography>
      </Box>
    </Box>
  )
}

function Desc({ city, desc }) {
  return (
    <Box
      sx={{
        flex: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 1.5,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20 }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {city}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          lineHeight: 1.7,
        }}
      >
        {desc}
      </Typography>
    </Box>
  )
}