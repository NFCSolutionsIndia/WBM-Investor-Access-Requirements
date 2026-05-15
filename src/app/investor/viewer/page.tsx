import { Metadata } from 'next';
import PDFViewer from './view';

export const metadata: Metadata = {
  title: 'Secure Document Viewer | Waste Be Minerals',
  description: 'Confidential document viewer for authorized investors.',
};

export default function ViewerPage() {
  return <PDFViewer />;
}
