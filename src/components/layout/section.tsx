import type { HTMLAttributes } from 'react';
import { section } from '@/styles/layout/section.css';

type Props = HTMLAttributes<HTMLElement>;

export default function Section({ className, ...props }: Props) {
  return (
    <section
      className={[section, className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}
