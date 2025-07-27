'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Verify() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const router = useRouter();

  const handleInputChange = (index: number, value: string) => {
     // Only 1 character allowed
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    // Auto-focus to the next field
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Backspace: Jump to the previous field
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <Card>
        <div className="flex flex-col gap-3 pb-8 text-center mx-auto">
          {/* SignIn Heading */}
          <h4 className="text-headline">
            Check your email
          </h4>
          <p className="flex items-center justify-center gap-1">
            <span className="text-secondary">We've emailed a 6-digit confirmation code. Please enter the code in below box to verify your email.</span>
          </p>
        </div>

        <div className='flex flex-col gap-6'>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-6 gap-2 mx-auto">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength={1}
                  value={code[index]}
                  className="h-[53px] w-full bg-[#919EAB14] rounded-[8px] text-center border-0 focus:outline-none"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
            <Button type="submit">Verify</Button>
            </form>
            <p className="flex items-center justify-center gap-1">
                <span className="text-primary">Don't have a code?</span>
                <a href="#" className="font-semibold">Resend</a>
            </p>
            <div
              className="flex items-center justify-center gap-2 mt-2 cursor-pointer group"
              onClick={() => router.push('/signin')}
            >
              {/* Arrow Left Icon (Lucide) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 group-hover:text-opacity-80 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-semibold group-hover:text-opacity-80 transition-colors">Return to sign in</span>
            </div>
        </div>
    </Card>
  );
}
