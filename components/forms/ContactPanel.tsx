"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, CalendarClock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import MeetingScheduler from "@/components/forms/MeetingScheduler";

export default function ContactPanel() {
  const [tab, setTab] = useState<"message" | "meeting">("message");

  return (
    <div className="glow-border min-w-0 rounded-3xl bg-white/[0.02] p-6 sm:p-10">
      <div className="mb-8 flex gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
        <button
          data-cursor="pointer"
          onClick={() => setTab("message")}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-full py-2.5 text-[10px] font-heading uppercase tracking-wide transition-colors sm:gap-2 sm:text-xs ${
            tab === "message" ? "bg-sb-white text-sb-black" : "text-sb-white/55 hover:text-sb-white"
          }`}
        >
          <MessageSquare size={13} className="shrink-0" /> <span className="truncate">Message</span>
        </button>
        <button
          data-cursor="pointer"
          onClick={() => setTab("meeting")}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-full py-2.5 text-[10px] font-heading uppercase tracking-wide transition-colors sm:gap-2 sm:text-xs ${
            tab === "meeting" ? "bg-sb-white text-sb-black" : "text-sb-white/55 hover:text-sb-white"
          }`}
        >
          <CalendarClock size={13} className="shrink-0" /> <span className="truncate">Book a Call</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {tab === "message" ? <ContactForm /> : <MeetingScheduler />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
