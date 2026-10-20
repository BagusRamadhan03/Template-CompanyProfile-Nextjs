"use client";

import { useEffect, useState } from "react";

interface LocalClockProps {
  className?: string;
}

export function LocalClock({ className }: LocalClockProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const tick = () => setTime(formatter.format(new Date()));

    const raf = requestAnimationFrame(tick);
    const interval = window.setInterval(tick, 1000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time || "--:--:--"} WIB
    </span>
  );
}
