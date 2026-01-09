import { createTheme, createThemeContract } from '@vanilla-extract/css';

/**
 * Font variables are injected via next/font in app/layout.tsx
 *
 * --font-body      (SUIT)
 * --font-ui-brand  (Inter)
 * --font-logo      (Racing Sans One)
 */

export const vars = createThemeContract({
  color: {
    background: null,
    foreground: null,

    card: null,
    cardForeground: null,

    popover: null,
    popoverForeground: null,

    primary: null,
    primaryForeground: null,

    secondary: null,
    secondaryForeground: null,

    accent: null,
    accentForeground: null,

    muted: null,
    mutedForeground: null,

    destructive: null,
    destructiveForeground: null,

    border: null,
    input: null,
    inputBackground: null,
    switchBackground: null,
    ring: null,
  },

  font: {
    // category/stack (convention)
    family: {
      sans: null,
      mono: null,
    },

    // semantic usage
    role: {
      body: null,
      uiBrand: null,
      logo: null,
      code: null,
    },

    size: {
      base: null,
      sm: null,
      lg: null,
      xl: null,
      '2xl': null,
      '4xl': null,
    },
    weight: {
      normal: null,
      medium: null,
      semibold: null,
      bold: null,
    },
    lineHeight: {
      tight: null,
      normal: null,
      relaxed: null,
    },
    letterSpacing: {
      tight: null,
      normal: null,
    },
  },

  radius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    full: null,
  },

  space: {
    '0': null,
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '6': null,
    '8': null,
    '12': null,
    '16': null,
  },

  z: {
    header: null,
    overlay: null,
    modal: null,
    popover: null,
    base: null,
    panel: null,
  },
});

// Shared stacks
const systemSansFallback =
  'system-ui, -apple-system, Segoe UI, Roboto, sans-serif';

const monoStack =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// Family (category)
const familySans = `var(--font-body), ${systemSansFallback}`;
const familyMono = monoStack;

// Role (semantic)
const roleBody = familySans; // SUIT-centric
const roleUiBrand = `var(--font-ui-brand), var(--font-body), ${systemSansFallback}`; // Inter -> SUIT
const roleLogo = `var(--font-logo), var(--font-ui-brand), var(--font-body), ${systemSansFallback}`; // Racing -> Inter -> SUIT
const roleCode = familyMono;

// Light theme - Automotive Premium Palette
export const lightThemeClass = createTheme(vars, {
  color: {
    background: '#ffffff',
    foreground: '#1a1a2e', // Dark navy for text

    card: '#ffffff',
    cardForeground: '#1a1a2e',

    popover: '#ffffff',
    popoverForeground: '#1a1a2e',

    primary: '#0f4c75', // Deep blue - main CTA
    primaryForeground: '#ffffff',

    secondary: '#bbe1fa', // Light blue - secondary actions
    secondaryForeground: '#1a1a2e',

    accent: '#3282b8', // Bright blue - interactive elements
    accentForeground: '#ffffff',

    muted: '#f5f7fa', // Very light gray
    mutedForeground: '#6b7280',

    destructive: '#dc2626',
    destructiveForeground: '#ffffff',

    border: 'rgba(26, 26, 46, 0.1)',
    input: 'transparent',
    inputBackground: '#f9fafb',
    switchBackground: '#cbd5e1',
    ring: '#3282b8',
  },

  font: {
    family: {
      sans: familySans,
      mono: familyMono,
    },
    role: {
      body: roleBody,
      uiBrand: roleUiBrand,
      logo: roleLogo,
      code: roleCode,
    },
    size: {
      base: '16px',
      sm: '14px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '4xl': '36px',
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.7',
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0em',
    },
  },

  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '18px',
    full: '9999px',
  },

  space: {
    '0': '0px',
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '6': '24px',
    '8': '32px',
    '12': '48px',
    '16': '64px',
  },

  z: {
    header: '10',
    overlay: '40',
    modal: '50',
    popover: '60',
    base: '0',
    panel: '10',
  },
});

// Dark theme - Automotive Premium Palette
export const darkThemeClass = createTheme(vars, {
  color: {
    background: '#0a0e1a', // Very dark navy
    foreground: '#f0f4f8', // Soft white

    card: '#14192b', // Dark navy card
    cardForeground: '#f0f4f8',

    popover: '#1a1f35',
    popoverForeground: '#f0f4f8',

    primary: '#3282b8', // Bright blue - stands out in dark
    primaryForeground: '#ffffff',

    secondary: '#1e3a5f', // Medium blue - subtle
    secondaryForeground: '#bbe1fa',

    accent: '#0f4c75', // Deep blue - accents
    accentForeground: '#bbe1fa',

    muted: '#1a1f35', // Dark gray-blue
    mutedForeground: '#94a3b8',

    destructive: '#ef4444',
    destructiveForeground: '#ffffff',

    border: 'rgba(187, 225, 250, 0.1)',
    input: 'rgba(187, 225, 250, 0.05)',
    inputBackground: '#1a1f35',
    switchBackground: '#334155',
    ring: '#3282b8',
  },

  font: {
    // Font stacks and roles stay consistent across themes
    family: {
      sans: familySans,
      mono: familyMono,
    },
    role: {
      body: roleBody,
      uiBrand: roleUiBrand,
      logo: roleLogo,
      code: roleCode,
    },
    size: {
      base: '16px',
      sm: '14px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '4xl': '36px',
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.7',
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0em',
    },
  },

  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '18px',
    full: '9999px',
  },

  space: {
    '0': '0px',
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '6': '24px',
    '8': '32px',
    '12': '48px',
    '16': '64px',
  },

  z: {
    header: '10',
    overlay: '40',
    modal: '50',
    popover: '60',
    base: '0',
    panel: '10',
  },
});
