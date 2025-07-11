"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-20 left-6 bg-gradient-to-r from-studio-gold to-studio-terracotta hover:from-studio-terracotta hover:to-studio-gold text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          size="sm"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </>
  )
}
