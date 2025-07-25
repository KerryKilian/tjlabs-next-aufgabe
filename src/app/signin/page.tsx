import { Metadata } from 'next';
import SignInCentered from '@/components/auth/SignInCentered';

export const metadata: Metadata = {
  title: 'Sign In | TJ Labs',
  description: 'Sign in to your account',
};

export default function SignInPage() {
  return <SignInCentered />;
}
