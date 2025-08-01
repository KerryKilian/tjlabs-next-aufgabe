
import React, { useState } from "react";
import IconButton from "../ui/IconButton";
import { Copy, CheckCircle } from "@solar-icons/react";
import Button from "../ui/Button";
import { generatePassword } from "@/utils/password";

// PasswordGenerator component for generating and copying passwords
// Uses a utility function to generate a random password

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setPassword(generatePassword());
    setCopied(false);
  };

  const handleCopy = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={handleGenerate}>
        Passwort generieren
      </Button>
      <div 
        className={`overflow-hidden transition-all duration-300 flex items-start justify-end 
          ${password ? 'max-h-20 mt-2' : 'max-h-0'}
        `}
      >
        <div
          className={`flex flex-row gap-2.5 items-center justify-center transition-all duration-300 
            ${password ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
          `}
        >
          <p>{password}</p>
          {/* Show Copy Icon when clicked */}
          <IconButton aria-label={copied ? "Kopiert" : "Passwort kopieren"} onClick={handleCopy}>
            <span className={`transition-opacity duration-300 ${copied ? 'opacity-0 absolute' : 'opacity-100 relative'}`}>
              <Copy size={24} />
            </span>
            <span className={`transition-opacity duration-300 ${copied ? 'opacity-100 relative' : 'opacity-0 absolute'}`}>
              <CheckCircle size={24} className="text-[#22C55E]" />
            </span>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
