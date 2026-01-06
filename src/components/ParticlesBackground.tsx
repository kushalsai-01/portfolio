'use client'

import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Narrow to non-null for use in inner classes/closures
    const canvasEl = canvas as HTMLCanvasElement
    const ctxEl = ctx as CanvasRenderingContext2D

    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 40

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvasEl.width
        this.y = Math.random() * canvasEl.height
        this.size = Math.random() * 2.5 + 1
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15
        this.opacity = Math.random() * 0.4 + 0.15
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvasEl.width) this.x = 0
        else if (this.x < 0) this.x = canvasEl.width

        if (this.y > canvasEl.height) this.y = 0
        else if (this.y < 0) this.y = canvasEl.height
      }

      draw() {
        ctxEl.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctxEl.beginPath()
        ctxEl.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctxEl.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    function animate() {
      ctxEl.clearRect(0, 0, canvasEl.width, canvasEl.height)

      if (!prefersReducedMotion) {
        particles.forEach((particle) => {
          particle.update()
          particle.draw()
        })
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvasEl.width = window.innerWidth
      canvasEl.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  )
}
