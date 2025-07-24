import { Metadata } from 'next';
import SignInCentered from '@/components/auth/SignInCentered';

export const metadata: Metadata = {
  title: 'Sign In | TJ Labs',
  description: 'Sign in to your account',
};

/**
 * SignIn Page
 * 
 * This page renders the centered sign-in form based on the Figma design.
 * Uses the SignInCentered component for the actual UI implementation.
 */
export default function SignInPage() {
  return <SignInCentered />;
}
