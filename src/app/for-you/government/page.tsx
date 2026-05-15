import type { Metadata } from 'next';
import PageView from './view';

export const metadata: Metadata = {
  title: 'Government Journey | Waste Be Minerals',
  description: 'Explore localized recovery of critical minerals for a resilient domestic supply chain and national security.',
};

export default function GovernmentPage() {
  return <PageView />;
}
