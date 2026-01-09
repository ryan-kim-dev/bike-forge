import Link from 'next/link';
import { text } from '@/styles/ui/typography.css';
import {
  footer,
  footerContainer,
  footerTop,
  footerBrand,
  footerDescription,
  footerLinks,
  footerLinkGroup,
  footerLinkTitle,
  footerLink,
  footerBottom,
  footerCopyright,
} from '@/styles/layout/footer.css';

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        {/* Top Section */}
        <div className={footerTop}>
          {/* Brand */}
          <div className={footerBrand}>
            <Link href="/">
              <span className={text({ variant: 'logo' })}>Bike Forge</span>
            </Link>
            <p className={footerDescription}>
              Build and customize your dream motorcycle in real-time 3D.
            </p>
          </div>

          {/* Links */}
          <div className={footerLinks}>
            {/* Product */}
            <div className={footerLinkGroup}>
              <h3 className={footerLinkTitle}>Product</h3>
              <Link href="/models" className={footerLink}>
                Models
              </Link>
              <Link href="/editor" className={footerLink}>
                Editor
              </Link>
              <Link href="/features" className={footerLink}>
                Features
              </Link>
            </div>

            {/* Community */}
            <div className={footerLinkGroup}>
              <h3 className={footerLinkTitle}>Community</h3>
              <Link href="/community" className={footerLink}>
                Gallery
              </Link>
              <Link href="/showcase" className={footerLink}>
                Showcase
              </Link>
              <Link href="/forum" className={footerLink}>
                Forum
              </Link>
            </div>

            {/* Company */}
            <div className={footerLinkGroup}>
              <h3 className={footerLinkTitle}>Company</h3>
              <Link href="/about" className={footerLink}>
                About
              </Link>
              <Link href="/contact" className={footerLink}>
                Contact
              </Link>
              <Link href="/privacy" className={footerLink}>
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={footerBottom}>
          <p className={footerCopyright}>
            © {new Date().getFullYear()} Bike Forge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
