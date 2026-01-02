"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Download, CheckCircle2, Sparkles } from "lucide-react"
import { DownloadBrochureModal } from "@/components/download-brochure-modal"

export function Overview({ isGlobalPage }: { isGlobalPage?: boolean }) {

  const price = isGlobalPage ? "$ 790K" : "AED 2.9 Million";

  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DAAA97]/5 rounded-lg blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#334058]/5 rounded-lg blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 rounded-lg bg-[#DAAA97]/10 border border-[#DAAA97]/20 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#DAAA97]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#DAAA97] font-bold">Overview</p>
          </div>
        </div>

        <h2
          className={`text-xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 lg:mb-20 leading-tight text-gray-900 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          A Sanctuary of Serenity by the Sea
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          <div
            className={`relative group transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
          >
            <div className="relative aspect-4/5 sm:aspect-3/4 md:aspect-4/5 rounded-lg overflow-hidden w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/Sanctuary of Serenity.jpg"
                alt="Sanctuary of Serenity"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-linear-to-br from-[#DAAA97]/30 via-transparent to-[#334058]/30 rounded-lg -z-10 blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="absolute inset-0 rounded-lg ring-1 ring-[#DAAA97]/20 group-hover:ring-[#DAAA97]/40 transition-all duration-700" />
          </div>

          <div
            className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
          >
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light">
              Set on Dubai Islands, just 90 seconds from the beach, Treppan Serenique Residences rises as the UAE's
              first longevity living community. Designed around the science of longevity, each home enhances how you
              live, breathe, recover, and function every day.
            </p>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light">
              At Serenique, wellness is not an amenity but a fully integrated ecosystem - where intelligent design, pure
              environments, and resort-style living converge. AI-enabled smart residences adapt and learn from your
              lifestyle while reducing energy consumption by up to 30%, creating a future-forward way of living built
              for long-term wellbeing.
            </p>

            <ul>
              {[
                "53+ resort-style amenities across three levels, including a Seaview Infinity Pool, Rooftop Lounge, Bamboo Park, and Meditation Pods.",
                "Advanced biohacking therapies, including cryotherapy, hyperbaric oxygen therapy, red light therapy, and immersive sensory pods.",
                "NASA-grade Airocide technology with advanced SAHU systems, delivering indoor air as pure as a mountain breeze.",
                "Hydrogenated, oxygenated, mineralised alkaline drinking water flowing directly to every home.",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`group flex gap-2 sm:gap-3 py-1 px-1 sm:px-2 rounded-xl hover:bg-linear-to-r hover:from-[#DAAA97]/5 hover:to-transparent transition-all duration-500 hover:translate-x-2 ${isVisible ? "opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#DAAA97] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 leading-relaxed text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="relative p-4 sm:p-6 md:p-8 rounded-lg bg-linear-to-br from-[#334058] to-[#2c4460] overflow-hidden group hover:shadow-2xl hover:shadow-[#334058]/30 transition-all duration-700">
              <div className="absolute inset-0 bg-linear-to-br from-[#DAAA97]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 " />
              <div className="absolute -right-10 -top-10 sm:-right-20 sm:-top-20 w-20 h-20 sm:w-40 sm:h-40 bg-[#DAAA97]/10 rounded-lg blur-3xl" />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full">
                  <div className="flex-1 min-w-[180px]">
                    <p className="text-xs sm:text-sm text-[#DAAA97] mb-1 uppercase tracking-[0.18em] font-bold">Starting From</p>
                    <div className="flex items-end gap-2">
                      <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white bg-gradient-to-r from-white via-[#DAAA97] to-white bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% auto', lineHeight: '1.1' }}>{price}</span>
                    </div>
                  </div>
                  <DownloadBrochureModal pdfUrl="/Treppan-Serenique-Brochure.pdf">
                    <Button className="group/btn flex items-center gap-2 bg-[#DAAA97] text-[#334058] hover:bg-white hover:text-[#334058] px-5 py-3 sm:px-7 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-lg shadow-md border border-[#DAAA97] hover:border-[#334058] transition-all duration-300 whitespace-nowrap">
                      <Download className="w-5 h-5 mr-1 group-hover/btn:animate-bounce" />
                      Download Brochure
                    </Button>
                  </DownloadBrochureModal>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Payment Plan CTA */}
        <div className={`mt-12 md:mt-16 lg:mt-20 max-w-7xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#334058] via-[#3d4d6a] to-[#334058] p-6 sm:p-8 md:p-10">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            <div className="absolute -left-20 -top-20 w-60 h-60 bg-[#DAAA97]/20 rounded-full blur-3xl" />
            <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-[#DAAA97]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
              {/* Left - Title */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-[#DAAA97]/20 border border-[#DAAA97]/40">
                  <Sparkles className="w-6 h-6 text-[#DAAA97]" />
                </div>
                <div>
                  <p className="text-[#DAAA97] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">Exclusive Offer</p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">60/40 Post Handover Payment Plan</h3>
                </div>
              </div>
              
              {/* Center - Payment Split */}
              <div className="flex items-center gap-3 sm:gap-6">
                <div className="text-center px-4 sm:px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#DAAA97]">60</span>
                    <span className="text-lg text-[#DAAA97] font-bold">%</span>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm font-medium mt-1">During Construction</p>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-[#DAAA97] to-transparent" />
                  <span className="text-[#DAAA97] text-xs font-bold">+</span>
                  <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-[#DAAA97] to-transparent" />
                </div>
                
                <div className="text-center px-4 sm:px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#DAAA97]">40</span>
                    <span className="text-lg text-[#DAAA97] font-bold">%</span>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm font-medium mt-1">Post Handover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
