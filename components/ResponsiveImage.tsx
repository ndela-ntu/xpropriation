'use client';

import Image from "next/image"
import { useState, useEffect, type ReactNode } from "react"

interface ResponsiveImageProps {
  src: string
  alt: string
  mobileAspectRatio: string
  tabletAspectRatio: string
  desktopAspectRatio: string
  className?: string
  children?: ReactNode
  overlayClassName?: string
}

export default function ResponsiveImage({
  src,
  alt,
  mobileAspectRatio,
  tabletAspectRatio,
  desktopAspectRatio,
  className = "",
  children,
  overlayClassName = "",
}: ResponsiveImageProps) {
  const [aspectRatio, setAspectRatio] = useState(mobileAspectRatio)

  useEffect(() => {
    const updateAspectRatio = () => {
      if (window.innerWidth >= 1024) {
        setAspectRatio(desktopAspectRatio)
      } else if (window.innerWidth >= 768) {
        setAspectRatio(tabletAspectRatio)
      } else {
        setAspectRatio(mobileAspectRatio)
      }
    }

    updateAspectRatio()
    window.addEventListener("resize", updateAspectRatio)
    return () => window.removeEventListener("resize", updateAspectRatio)
  }, [mobileAspectRatio, tabletAspectRatio, desktopAspectRatio])

  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio }}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
      {children && <div className={`absolute inset-0 ${overlayClassName}`}>{children}</div>}
    </div>
  )
}

