"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export function ExpressInterestModal({ children }: { children?: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? children : (
          <Button size="lg" className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border-2 border-white/50 text-white hover:bg-white hover:text-[#334058] hover:border-white px-6 py-4 sm:px-10 sm:py-7 text-sm sm:text-base font-semibold uppercase tracking-wider rounded-[4px] transform hover:scale-105 transition-all duration-500 shadow-2xl">
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              Express Interest
            </span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg w-full p-0 bg-white rounded-lg overflow-hidden">
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
