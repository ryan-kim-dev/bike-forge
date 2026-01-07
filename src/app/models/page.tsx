import { getMakers } from '@/lib/apis';
import ModelsClient from '../features/models/models-client';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import { stack } from '@/styles/layout/stack.css';
import { text } from '@/styles/ui/typography.css';
import { modelsContentLayout } from '@/styles/pages/models.css';

export default async function ModelsPage() {
  let makers;
  try {
    makers = await getMakers();
  } catch (err) {
    console.error('Failed to fetch makers:', err);
    return <div>Failed to load makers. Please try again later.</div>;
  }
  if (!makers) {
    return <div>No makers available.</div>;
  }

  return (
    <main>
      {/* 헤더 섹션 - 정적 */}
      <Section>
        <Container>
          <div
            className={stack({
              direction: 'column',
              align: 'center',
              gap: '4',
            })}
          >
            <h1 className={text({ variant: 'h1' })}>Choose Your Motorcycle</h1>
            <p className={text({ variant: 'body', muted: true })}>
              Select a model to start customizing in 3D.
            </p>
          </div>
        </Container>
      </Section>

      {/* 콘텐츠 섹션 - 레이아웃은 서버, 인터랙션은 클라이언트 */}
      <Section>
        <Container size="wide">
          <div className={modelsContentLayout}>
            <ModelsClient makers={makers} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
