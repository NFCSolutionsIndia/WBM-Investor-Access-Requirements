import type { Metadata } from 'next';
import PageView from './view';

export const metadata: Metadata = {
  title: 'Supplier Journey | Waste Be Minerals',
  description: 'Transform your end-of-life assets into high-value feedstock for Waste Be Minerals and secure professional disposal.',
};

export default function SupplierPage() {
  return <PageView />;
}
