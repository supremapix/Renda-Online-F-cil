import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  phrases, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delay = 2000,
  className = '' 
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setCurrentSpeed(deletingSpeed);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setCurrentSpeed(typingSpeed);
      }

      if (!isDeleting && text === fullText) {
        setCurrentSpeed(delay);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentSpeed(typingSpeed);
      }
    };

    const timer = setTimeout(handleTyping, currentSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, currentSpeed, phrases, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse ml-1 text-green-500">|</span>
    </span>
  );
};