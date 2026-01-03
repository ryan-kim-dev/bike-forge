import Link from 'next/link';
import { text } from '@/styles/ui/typography.css';
import { button } from '@/styles/ui/button.css';
import {
  header,
  headerContainer,
  headerLogo,
  headerLogoIcon,
  headerNav,
  headerNavLink,
  headerActions,
} from '@/styles/layout/header.css';
import BikeLogoIcon from '@/assets/icons/bike-logo.svg';

export default function Header() {
  return (
    <header className={header}>
      <div className={headerContainer}>
        {/* Logo */}
        <Link href="/" className={headerLogo}>
          <BikeLogoIcon className={headerLogoIcon} aria-hidden="true" />
          <span className={text({ variant: 'logo' })}>Bike Forge</span>
        </Link>

        {/* Navigation */}
        <nav className={headerNav}>
          <Link href="/models" className={headerNavLink}>
            Models
          </Link>

          <Link href="/community" className={headerNavLink}>
            Community
          </Link>
        </nav>

        {/* Actions */}
        <div className={headerActions}>
          <Link href="/signin" className={button({ variant: 'ghost', size: 'sm' })}>
            Sign In
          </Link>
          <Link href="/signup" className={button({ variant: 'primary', size: 'sm' })}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
