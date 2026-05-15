import type { Metadata } from 'next';
import PageView from './view';

export const metadata: Metadata = {
  title: 'Customer / OEM Journey | Waste Be Minerals',
  description: 'Secure your critical mineral supply chain with engineering-grade reclaimed materials from Waste Be Minerals.',
};

export default function CustomerPage() {
  return <PageView />;
}
