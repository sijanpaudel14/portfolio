'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [borderPosition, setBorderPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const updateBorderPosition = () => {
      setBorderPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.3,
        y: prev.y + (position.y - prev.y) * 0.3,
      }))
    }

    const borderAnimation = setInterval(updateBorderPosition, 16) // 60fps

    const hideCursor = () => {
      setIsVisible(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.getAttribute('role') === 'button' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.getAttribute('role') === 'button' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      clearInterval(borderAnimation)
    }
  }, [position.x, position.y])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-500 ease-out opacity-40 ${
          isHovering
            ? 'w-16 h-16 border-2 border-blue-500/80'
            : 'w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500'
        }`}
        style={{
          transform: `translate(${position.x - (isHovering ? 32 : 6)}px, ${
            position.y - (isHovering ? 32 : 6)
          }px)`,
          ...(isHovering && {
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 40%, rgba(59, 130, 246, 0.3) 70%, rgba(147, 51, 234, 0.4) 100%)',
          }),
        }}
      />

      {/* Circle border around cursor with 2x gap - floatable */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-49 border border-blue-400/80 transition-all duration-300 ease-out w-[24px] h-[24px] ${
          isHovering ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: `translate(${borderPosition.x - 12}px, ${
            borderPosition.y - 12
          }px)`,
        }}
      />

      {/* Sparkling border effects on hover */}
      {isHovering && (
        <>
          {/* Animated gradient ring */}
          <div
            className='fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-40 animate-spin-slow'
            style={{
              transform: `translate(${position.x - 40}px, ${
                position.y - 40
              }px)`,
              background:
                'conic-gradient(from 0deg, transparent, #3b82f6, transparent, #9333ea, transparent, #ec4899, transparent)',
              maskImage:
                'radial-gradient(circle, transparent 35px, black 37px, black 38px, transparent 40px)',
              WebkitMaskImage:
                'radial-gradient(circle, transparent 35px, black 37px, black 38px, transparent 40px)',
            }}
          />

          {/* Sparkle dots */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className='fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-45 animate-pulse'
              style={{
                transform: `translate(${
                  position.x + Math.cos((i * Math.PI) / 4) * 30 - 2
                }px, ${position.y + Math.sin((i * Math.PI) / 4) * 30 - 2}px)`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.8s',
              }}
            />
          ))}

          {/* Inner pulsing ring */}
          <div
            className='fixed top-0 left-0 w-18 h-18 rounded-full pointer-events-none z-39 border border-blue-400/40 animate-ping'
            style={{
              transform: `translate(${position.x - 36}px, ${
                position.y - 36
              }px)`,
              animationDuration: '1.5s',
            }}
          />
        </>
      )}
    </>
  )
}
