'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { EyeClosed, Eye, Copy } from '@solar-icons/react';
import PasswordGenerator from './PasswordGenerator';
import IconButton from '../ui/IconButton';


export default function SignInCentered() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/verify');
  };

  return (
    <Card>
        <div className="flex flex-col gap-3 pb-8 text-center mx-auto">
          {/* SignIn Heading */}
          <h4 className="text-headline">
            Sign in
          </h4>
          <p className="flex items-center justify-center gap-1">
            <span className="text-secondary">Don't have an account?</span>
            <a href="#" className="font-semibold">Get started</a>
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          {/* SignIn Form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="relative h-[53px] bg-[#919EAB14] rounded-lg pl-3 pr-[10px]  flex items-end pt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="w-full h-full bg-transparent border-0 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="floating-label text-gray-600"
              >
                Email address
              </label>
            </div>

            <div className="relative h-[53px] bg-[#919EAB14] rounded-lg pl-3 pr-[10px] flex items-end pt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="floating-input w-full h-full bg-transparent border-0 focus:outline-none peer pr-12"
                placeholder="6+ characters"
                required
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
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600"
              >
                {showPassword ? <Eye size={24} /> : <EyeClosed weight='Outline' size={24} />}
              </IconButton>
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
          <PasswordGenerator />
        </div>
    </Card>
  );
}
