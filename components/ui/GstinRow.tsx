"use client";

import { FileText } from "lucide-react";
import CopyRow from "@/components/ui/CopyRow";

export default function GstinRow({ value, href }: { value: string; href?: string }) {
  return <CopyRow icon={FileText} label="GSTIN" value={value} href={href} />;
}