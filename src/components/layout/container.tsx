import type { HTMLAttributes } from 'react';
import { container } from '@/styles/layout/container.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { clsx } from 'clsx';

type ContainerVariants = NonNullable<RecipeVariants<typeof container>>;

interface Props extends HTMLAttributes<HTMLDivElement>, ContainerVariants {}

export default function Container({
  size,
  className,
  ...props
}: Props) {
  return <div className={clsx(container({ size }), className)} {...props} />;
}
