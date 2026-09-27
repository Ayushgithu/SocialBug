"use client";

import type { ComponentType } from "react";
import {
  Home,
  Info,
  Layers,
  Briefcase,
  Users,
  Star,
  BookOpen,
  Handshake,
  Mail,
  HelpCircle,
  ShieldCheck,
  FileText,
  Sparkles,
} from "lucide-react";

const ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  home: Home,
  info: Info,
  layers: Layers,
  briefcase: Briefcase,
  users: Users,
  star: Star,
  book: BookOpen,
  handshake: Handshake,
  mail: Mail,
  help: HelpCircle,
  shield: ShieldCheck,
  file: FileText,
};

/** Renders the lucide icon matching a nav link's `icon` key. */
export default function NavIcon({
  name,
  size = 15,
  className = "",
}: {
  name?: string;
  size?: number;
  className?: string;
}) {
  const Icon = (name && ICONS[name]) || Sparkles;
  return <Icon size={size} className={className} />;
}
