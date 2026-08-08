"use client";

import { motion } from "framer-motion";

export default function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-ink">{label}</span>
        <span className="font-mono text-xs text-accent">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-bg-panel overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
}
