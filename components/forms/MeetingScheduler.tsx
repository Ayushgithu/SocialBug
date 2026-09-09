"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Check, Video } from "lucide-react";

const DURATIONS = ["15 min", "30 min", "45 min"];
const TIMES = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"];

function getUpcomingDays(count: number) {
  const days = [];
  const today = new Date();
  let cursor = new Date(today);
  while (days.length < count) {
    cursor = new Date(cursor);
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor));
    }
  }
  return days;
}

export default function MeetingScheduler() {
  const days = useMemo(() => getUpcomingDays(6), []);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [duration, setDuration] = useState(DURATIONS[1]);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    const day = days[selectedDay];
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glow-border flex flex-col items-center rounded-3xl bg-white/[0.02] p-12 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sb-lime text-sb-black">
          <Check size={26} />
        </span>
        <h3 className="font-heading mt-6 text-2xl font-semibold">Call locked in. 🐞</h3>
        <p className="mt-3 max-w-sm text-sm text-sb-white/60">
          {day.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}{" "}
          at {selectedTime} · {duration}. A calendar invite and video link are on their way to
          your inbox.
        </p>
        <button
          data-cursor="pointer"
          onClick={() => {
            setConfirmed(false);
            setSelectedTime(null);
          }}
          className="mt-8 text-xs uppercase tracking-[0.2em] text-sb-white/50 hover:text-sb-white"
        >
          Book another time
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-sm text-sb-white/55">
        <Video size={16} className="text-sb-lime" />
        30-min video call with the SocialBug team
      </div>

      <div>
        <p className="mb-3 flex items-center gap-2 font-heading text-xs uppercase tracking-[0.15em] text-sb-white/50">
          <Calendar size={13} /> Pick a day
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {days.map((d, i) => (
            <button
              key={i}
              data-cursor="pointer"
              onClick={() => {
                setSelectedDay(i);
                setSelectedTime(null);
              }}
              className={`flex min-w-[64px] flex-col items-center rounded-2xl border px-3 py-3 transition-colors ${
                selectedDay === i
                  ? "border-sb-lime bg-sb-lime/10 text-sb-lime"
                  : "border-white/12 text-sb-white/60 hover:border-white/30"
              }`}
            >
              <span className="text-[10px] uppercase tracking-wide">
                {d.toLocaleDateString(undefined, { weekday: "short" })}
              </span>
              <span className="font-heading mt-1 text-lg font-semibold">{d.getDate()}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 flex items-center gap-2 font-heading text-xs uppercase tracking-[0.15em] text-sb-white/50">
          <Clock size={13} /> Pick a time
        </p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-3">
          {TIMES.map((t) => (
            <button
              key={t}
              data-cursor="pointer"
              onClick={() => setSelectedTime(t)}
              className={`rounded-xl border px-3 py-2.5 text-sm transition-colors ${
                selectedTime === t
                  ? "border-sb-lime bg-sb-lime/10 text-sb-lime"
                  : "border-white/12 text-sb-white/65 hover:border-white/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 font-heading text-xs uppercase tracking-[0.15em] text-sb-white/50">
          Duration
        </p>
        <div className="flex gap-2">
          {DURATIONS.map((d) => (
            <button
              key={d}
              data-cursor="pointer"
              onClick={() => setDuration(d)}
              className={`rounded-full border px-4 py-1.5 text-xs font-heading transition-colors ${
                duration === d
                  ? "border-sb-lime text-sb-lime"
                  : "border-white/15 text-sb-white/50 hover:text-sb-white"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTime && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            data-cursor="pointer"
            onClick={() => setConfirmed(true)}
            className="group relative mt-2 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full bg-sb-white px-8 py-4 font-heading text-sm font-semibold text-sb-black"
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-sb-pink via-sb-orange to-sb-lime transition-transform duration-300 ease-out group-hover:scale-y-100" />
            <span className="relative z-10">
              Confirm {days[selectedDay].toLocaleDateString(undefined, { weekday: "short", day: "numeric" })} at {selectedTime}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
