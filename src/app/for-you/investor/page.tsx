import { Metadata } from 'next';
import ForYouInvestor from './view';
import { InvestorGuard } from '@/components/investor/InvestorGuard';

export const metadata: Metadata = {
  title: 'Investor Journey | Waste Be Minerals',
  description: 'Confidential investor roadmap and data room for Waste Be Minerals.',
};

export default function InvestorPage() {
  return (
    <InvestorGuard>
      <ForYouInvestor />
    </InvestorGuard>
  );
}
