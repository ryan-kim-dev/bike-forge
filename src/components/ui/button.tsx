import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { button as buttonRecipe } from '@/styles/ui/button.css';
import { clsx } from 'clsx';

/**
 * Button component wrapping Base UI Button with Vanilla Extract styling
 *
 * @example
 * ```tsx
 * // Standard button
 * <Button variant="primary" size="md">Click me</Button>
 *
 * // Disabled state
 * <Button disabled>Disabled</Button>
 *
 * // Loading state
 * <Button loading>Processing...</Button>
 * ```
 *
 * Base UI provides:
 * - Accessibility (ARIA attributes)
 * - Keyboard navigation
 * - Focus management
 * - Disabled state handling
 *
 * Vanilla Extract provides:
 * - Visual styling via recipe
 * - Design token integration
 * - Variant composition
 */

type ButtonVariants = NonNullable<RecipeVariants<typeof buttonRecipe>>;

export interface ButtonProps
  extends Omit<React.ComponentPropsWithRef<'button'>, 'color'>,
    ButtonVariants {
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant, size, loading, disabled, className, children, ...props },
    ref
  ) {
    return (
      <BaseButton
        ref={ref}
        disabled={disabled || loading}
        className={clsx(buttonRecipe({ variant, size }), className)}
        {...props}
      >
        {loading ? 'Loading...' : children}
      </BaseButton>
    );
  }
);
