'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { EyeClosed, Eye } from '@solar-icons/react';
import PasswordGenerator from './PasswordGenerator';
import AlertMessage from '../ui/AlertMessage';
import FloatingInputWrapper from '../ui/FloatingInputWrapper';
import IconButton from '../ui/IconButton';

// Signin component with signin form, password visibility toggle, and password generator

export default function SignInCentered() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  // Handle form submission
  // Validate email and password, show error messages if invalid
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    setEmailError('');
    setPasswordError('');
    if (!validateEmail(email)) {
      setEmailError('Bitte gib eine gültige E-Mail-Adresse ein.');
      valid = false;
    }
    if (password.length < 6) {
      setPasswordError('Das Passwort muss mindestens 6 Zeichen lang sein.');
      valid = false;
    }
    if (!valid) return;
    router.push('/verify');
  };

  return (
    <Card>
        {/* SignIn Heading */}
        <div className="flex flex-col gap-3 pb-8 text-center mx-auto">
          <h4 className="text-headline">
            Sign in
          </h4>
          <p className="flex items-center justify-center gap-1">
            <span className="text-secondary">Don&apos;t have an account?</span>
            <a href="#" className="font-semibold">Get started</a>
          </p>
        </div>
        
        {/* Signin Form */}
        <div className="flex flex-col gap-6">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div>
              <FloatingInputWrapper>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full h-full bg-transparent border-0 focus:outline-none peer ${emailError ? 'border border-red-500' : ''}`}
                  placeholder=" "
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email" // autofill for browsers
                />
                <label
                  htmlFor="email"
                  className="floating-label text-gray-600"
                >
                  Email address
                </label>
              </FloatingInputWrapper>
              {/* Show Email Error Message */}
              {emailError && 
                <AlertMessage>
                  <span className="text-error text-xs">{emailError}</span>
                </AlertMessage>
              }
            </div>
            
            {/* Password */}
            <div>
              <FloatingInputWrapper>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className={`w-full h-full bg-transparent border-0 focus:outline-none peer pr-12 ${passwordError ? 'border border-red-500' : ''}`}
                  placeholder={passwordFocused ? '6+ characters' : ' '}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  autoComplete="current-password" // autofill for browsers
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                />
                <label
                  htmlFor="password"
                  className="floating-label text-gray-600"
                >
                  Password
                </label>
                {/* Eye Icon - Toggle Password Visibility */}
                <IconButton
                  type="button"
                  aria-label={showPassword ? "Passwort ausblenden" : "Passwort anzeigen"}
                  onClick={togglePasswordVisibility}
                  tabIndex={-1}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600"
                >
                  {showPassword ? <Eye size={24} /> : <EyeClosed weight='Outline' size={24} />}
                </IconButton>
              </FloatingInputWrapper>
              {/* Show Password Error Message */}
              {passwordError && 
                <AlertMessage>
                  <span className="text-error text-xs">{passwordError}</span>
                </AlertMessage>
              }
            </div>

            <div className="flex justify-end">            
              <a href="#" className="text-right">
                Forgot password?
              </a>
            </div>

            <Button type="submit">
              Sign In
            </Button>
          </form>

          {/* Password Generator */}
          <PasswordGenerator />
        </div>
    </Card>
  );
}
