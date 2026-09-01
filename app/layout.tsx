import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Prompt Hub｜农场主逼我做的 AI 指南',
  description:
    '面向中国用户，聚焦全球主流海外 AI 模型的专业排名、使用指南、Prompt 与实战工作流平台。',
  openGraph: {
    title: 'Prompt Hub｜农场主逼我做的',
    description: '全球 AI 模型排名、专业 Prompt 与职业工作流，持续更新。',
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
    description: '全球 AI 模型排名、专业 Prompt 与职业工作流，持续更新。',
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
