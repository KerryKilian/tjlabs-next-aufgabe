'use client';

import Button from '@/components/ui/Button';
import { EyeClosed } from 'lucide-react';

export default function SignInCentered() {
  return (
    // Auth Container - Full screen centering  
    <div className="min-h-screen flex items-center justify-center">
      {/* Auth Card - Figma Design Specs */}
      <div className="w-full max-w-[420px] h-auto rounded-2xl p-10 bg-white shadow-[0_24px_48px_0_#919EAB29]">
        <div className="flex flex-col gap-3 pb-8 text-center mx-auto">
          {/* SignIn Heading */}
          <h4 className="font-[family-name:var(--font-barlow)] text-text-primary text-2xl font-semibold leading-9 tracking-normal">
            Sign in
          </h4>
          <p className="flex items-center justify-center gap-1 text-sm">
            <span className="text-text-secondary text-sm leading-[22px]">Don't have an account?</span>
            <a href="#" className="text-textprimary text-sm font-semibold leading-[22px] ">Get started</a>
          </p>
        </div>
        
        <form className="flex flex-col gap-6">
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
              className="floating-label text-sm text-gray-600"
            >
              Email address
            </label>
          </div>

          <div className="relative h-[53px] bg-[#919EAB14] rounded-lg pl-3 pr-[10px] flex items-end pt-2">
            <input
              id="password"
              name="password"
              type="password"
              className="floating-input w-full h-full bg-transparent border-0 focus:outline-none peer pr-12"
              placeholder="6+ characters"
              required
            />
            <label
              htmlFor="password"
              className="floating-label text-sm  text-gray-600"
            >
              Password
            </label>
            {/* Eye Icon - Toggle Password Visibility */}
            <button
              type="button"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600"
            >
              <EyeClosed size={24} />
            </button>
          </div>
          
          <div className="flex justify-end">            
            <a href="#" className="font-normal text-sm leading-[22px] text-right text-primary">
              Forgot password?
            </a>
          </div>
          
          <Button type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
