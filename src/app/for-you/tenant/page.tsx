import type { Metadata } from 'next';
import PageView from './view';

export const metadata: Metadata = {
  title: 'Tenant / Data Centre Journey | Waste Be Minerals',
  description: 'Explore spec-grade infrastructure and 15-year lease options for hyperscalers and data centre operators.',
};

export default function TenantPage() {
  return <PageView />;
}
