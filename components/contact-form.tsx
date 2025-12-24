"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MessageSquare, Building2, Sparkles } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    investmentType: "",
    propertyType: "",
    message: "",
  })

  useEffect(() => {
    const scriptId = "hsforms-developer-script"
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.src = "https://js.hsforms.net/forms/embed/developer/49053274.js"
      script.defer = true
      script.id = scriptId
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#1a2332] via-[#2c3e50] to-[#34495e] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/modern-luxury-apartment-building-exterior-at-night.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#DAAA97] rounded-[4px] blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#334058] rounded-[4px] blur-3xl animate-float-delayed" />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[4px] bg-[#DAAA97]/10 border border-[#DAAA97]/20 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#DAAA97]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#DAAA97] font-bold">Get In Touch</p>
          </div>

            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-white mb-3 sm:mb-4 leading-tight px-4">
              Request Call Back
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg px-4">
              Our team will contact you within 24 hours
            </p>
          </div>

          <div className="bg-[#1b2946] backdrop-blur-md rounded-[4px] p-6 md:p-10 shadow-2xl border border-white/20">
            <div>
              <div
                id="hs-form-embed"
                className="hs-form-html"
                data-region="na1"
                data-form-id="09a128eb-2ba8-4163-b316-9d7e8d6a07cb"
                data-portal-id="49053274"
              />
            </div>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-8 text-white/70 text-xs md:text-sm">
            {["🔒 Secure & Confidential", "⚡ Quick Response", "🎯 Expert Guidance"].map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
