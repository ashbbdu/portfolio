import { useEffect, useState } from 'react';

type Props = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
};

export function Typewriter({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseMs = 1400,
  className = '',
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex(i => (i + 1) % phrases.length);
    } else {
      timeout = window.setTimeout(
        () => {
          setText(prev =>
            deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
          );
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[0.6ch] -mb-0.5 animate-blink bg-term-green-l dark:bg-term-green">&nbsp;</span>
    </span>
  );
}
