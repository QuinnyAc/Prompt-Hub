'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function CopyPromptButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copyText() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Button
      type="button"
      onClick={copyText}
      className="rounded-xl bg-[#1746d1] hover:bg-[#1039b0]"
    >
      {copied ? <Check /> : <Copy />}
      {copied ? '已复制' : '复制 Prompt'}
    </Button>
  );
}
