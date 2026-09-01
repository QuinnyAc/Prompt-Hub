import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Prompt Hub｜农场主逼我做的 AI 指南',
  description:
    '面向中国用户的顶尖专业 Prompt 库，并持续追踪全球主流海外 AI 模型动态。',
  openGraph: {
    title: 'Prompt Hub｜农场主逼我做的',
    description: '顶尖专业 Prompt 持续上新，全球 AI 模型排名与动态统一更新。',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/QuinnyAc/Prompt-Hub/main/public/og.png',
        width: 1200,
        height: 630,
        alt: 'Prompt Hub · 农场主逼我做的',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompt Hub｜农场主逼我做的',
    description: '顶尖专业 Prompt 持续上新，全球 AI 模型排名与动态统一更新。',
    images: [
      'https://raw.githubusercontent.com/QuinnyAc/Prompt-Hub/main/public/og.png',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
