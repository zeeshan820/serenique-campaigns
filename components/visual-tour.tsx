"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

export function VisualTour() {
  const [activeTab, setActiveTab] = useState<"exterior" | "interior">("exterior")
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTab])

  const exteriorImages = [
    { src: "/exterior-1.jpg", alt: "Exterior View 1" },
    { src: "/exterior-2.webp", alt: "Exterior View 2" },
    { src: "/exterior-3.webp", alt: "Exterior View 3" },
    { src: "/exterior-4.webp", alt: "Exterior View 4" },
    { src: "/exterior-5.webp", alt: "Exterior View 5" },
    { src: "/exterior-6.webp", alt: "Exterior View 6" },
    { src: "/exterior-7.webp", alt: "Exterior View 7" },
    { src: "/exterior-8.webp", alt: "Exterior View 8" },
  ]

  const interiorImages = [
    { src: "/interior-01.webp", alt: "Interior View 1" },
    { src: "/interior-02.webp", alt: "Interior View 2" },
    { src: "/interior-03.webp", alt: "Interior View 3" },
    { src: "/interior-04.webp", alt: "Interior View 4" },
    { src: "/interior-05.webp", alt: "Interior View 5" },
    { src: "/interior-06.webp", alt: "Interior View 6" },
    { src: "/interior-07.webp", alt: "Interior View 7" },
    { src: "/interior-08.webp", alt: "Interior View 8" },
    { src: "/interior-09.webp", alt: "Interior View 9" },
    { src: "/interior-10.webp", alt: "Interior View 10" },
    { src: "/interior-11.webp", alt: "Interior View 11" },
    { src: "/interior-12.webp", alt: "Interior View 12" },
  ]

  const images = activeTab === "exterior" ? exteriorImages : interiorImages

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section ref={sectionRef} className="py-2 pb-[80px] md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[4px] bg-[#DAAA97]/10 border border-[#DAAA97]/20 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#DAAA97]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#DAAA97] font-bold">Visual Highlights</p>
          </div>
        </div>

         <h2
          className={`text-xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 lg:mb-20 leading-tight text-gray-900 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Your Visual Tour Starts Here
        </h2>

        <div
          className={`flex justify-center gap-3 md:gap-4 mb-12 md:mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <Button
            onClick={() => setActiveTab("exterior")}
            variant={activeTab === "exterior" ? "default" : "outline"}
            className={`px-6 md:px-8 py-5 md:py-6 text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
              activeTab === "exterior"
                ? "bg-[#DAAA97] hover:bg-[#c99a87] text-white shadow-lg shadow-[#DAAA97]/30"
                : "text-gray-700 hover:border-[#DAAA97] hover:text-[#DAAA97]"
            }`}
          >
            Exterior
          </Button>
          <Button
            onClick={() => setActiveTab("interior")}
            variant={activeTab === "interior" ? "default" : "outline"}
            className={`px-6 md:px-8 py-5 md:py-6 text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
              activeTab === "interior"
                ? "bg-[#DAAA97] hover:bg-[#c99a87] text-white shadow-lg shadow-[#DAAA97]/30"
                : "text-gray-700 hover:border-[#DAAA97] hover:text-[#DAAA97]"
            }`}
          >
            Interior
          </Button>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative aspect-video rounded-xl md:rounded-[4px] overflow-hidden shadow-2xl">
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-[4px] shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-[4px] shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
            </button>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Image caption */}
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white z-10">
              <p className="text-lg md:text-2xl font-bold drop-shadow-lg">{images[currentIndex].alt}</p>
              <p className="text-xs md:text-sm text-white/80">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Thumbnail dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 md:h-3 rounded-[4px] transition-all duration-300 ${
                  index === currentIndex ? "bg-[#DAAA97] w-8 md:w-10" : "bg-gray-300 w-2 md:w-3 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
