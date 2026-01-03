import Link from 'next/link';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { text } from '@/styles/ui/typography.css';
import { button } from '@/styles/ui/button.css';
import { stack } from '@/styles/layout/stack.css';
import { heroVisual, featureCard } from '@/styles/ui/card.css';
import {
  heroLayout,
  heroContentResponsive,
  heroVisualResponsive,
} from '@/styles/ui/hero.css';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}

function HeroSection() {
  return (
    <Section>
      <Container>
        <div className={heroLayout}>
          {/* Left: Hero Content */}
          <div className={heroContentResponsive}>
            <div className={stack({ direction: 'column', gap: '4' })}>
              <h1 className={text({ variant: 'h1' })}>
                Build Your Dream Motorcycle
              </h1>
              <p className={text({ variant: 'body', muted: true })}>
                Customize every detail in real-time 3D. Choose from hundreds of
                parts, colors, and styles.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={stack({ direction: 'row', gap: '3' })}>
              <Button variant="primary" size="lg">
                Start Customizing
              </Button>

              <Link
                href="/community"
                className={button({ variant: 'ghost', size: 'lg' })}
              >
                Browse Gallery
              </Link>
            </div>
          </div>

          {/* Right: Hero Visual Placeholder */}
          <div className={heroVisualResponsive}>
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function HeroVisual() {
  return (
    <div className={heroVisual()}>
      <p className={text({ variant: 'caption' })}>3D Motorcycle Viewer</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <Section>
      <Container>
        <div
          className={stack({ direction: 'column', align: 'center', gap: '12' })}
        >
          <h2 className={text({ variant: 'h2' })}>Features</h2>

          <div className={stack({ direction: 'row', gap: '6', wrap: true })}>
            <FeatureCard
              title="Color & Finish Control"
              description="Adjust colors and finishes to shape the overall character of your build"
            />

            <FeatureCard
              title="Decals & Graphics"
              description="Apply and position decals to add identity and detail"
            />

            <FeatureCard
              title="Parts Customization"
              description="Swap and configure parts to match your riding style"
            />

            <FeatureCard
              title="Share & Collaborate"
              description="Save your builds and share them with the community"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={featureCard()}>
      <div className={stack({ direction: 'column', gap: '2' })}>
        <h3 className={text({ variant: 'h3' })}>{title}</h3>
        <p className={text({ variant: 'body', muted: true })}>{description}</p>
      </div>
    </div>
  );
}
