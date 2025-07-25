'use client';


import React from "react";
import { Settings } from '@solar-icons/react'
import IconButton from './IconButton';

export default function Header() {
  return (
    <header className="w-full h-[64px] md:h-[72px]">
      <div className="flex items-center justify-end gap-2 px-[14px] md:px-6 w-full h-full">
        {/* British Flag */}
        <IconButton aria-label="Change language">
          <img src="/flags/gb.png" alt="British Flag" className="w-[28px] h-[20px] rounded-[5px] object-cover" />
        </IconButton>

        <IconButton aria-label="Settings">
          <Settings weight="Outline" className="w-[28px] h-[20px] rounded-[5px] object-cover" />
        </IconButton>
      </div>
    </header>
  );
}
