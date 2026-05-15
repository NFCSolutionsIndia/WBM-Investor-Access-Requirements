import { Metadata } from 'next';
import InvestorLogin from './view';

export const metadata: Metadata = {
  title: 'Investor Access | Waste Be Minerals',
  description: 'Secure access to Waste Be Minerals investor data room and confidential materials.',
};

export default function LoginPage() {
  return <InvestorLogin />;
}
