import type { Metadata } from 'next';
import PageView from './view';

export const metadata: Metadata = {
  title: 'Academia / Research Journey | Waste Be Minerals',
  description: 'Collaborate on the next frontier of hydrometallurgy with Waste Be Minerals research partnerships.',
};

export default function AcademiaPage() {
  return <PageView />;
}
