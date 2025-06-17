"use client"

import { useState, useRef, useEffect } from "react";
import './lazyImage.scss';

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

export default function LazyImage({ src, alt, className }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  return (
    <div className={`lazyImageContainer ${className}`} ref={imgRef}>
      {!isLoaded && !hasError && (
        <div className="placeholder">
          <div className="shimmer"></div>
        </div>
      )}

      {isInView && (
        <img
          src={hasError ? "/placeholder.svg?height=750&width=500" : src}
          alt={alt}
          className={`image ${isLoaded && "loaded"}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  )
}
