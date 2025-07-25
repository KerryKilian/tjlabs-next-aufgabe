import Verify from '@/components/auth/Verify';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify | TJ Labs',
  description: 'Verify your account',
};

export default function VerifyPage() {
  return <Verify />;
}
