import type { Metadata } from 'next';
import PageView from './view';

export const metadata: Metadata = {
  title: 'All Journeys | Waste Be Minerals',
  description: 'Explore the different ways stakeholders can partner with Waste Be Minerals in the circular economy.',
};

export default function AllJourneysPage() {
  return <PageView />;
}
