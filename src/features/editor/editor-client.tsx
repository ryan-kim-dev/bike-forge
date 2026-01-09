'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Viewer from './viewer/viewer';

import {
  editorPage,
  canvasLayer,
  leftPanel,
  rightPanel,
  leftClosed,
  rightClosed,
  panelHeader,
  panelBody,
  leftHandle,
  rightHandle,
  handleArrow,
  bottomPanel,
  bottomClosed,
  bottomHandleRow,
  bottomGrabber,
  bottomTabs,
  bottomTab,
  bottomTabActive,
  bottomContent,
  panelSurface,
} from '@/styles/pages/editor/overlay.css';
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';
import PartsPanel from './parts-panel';
import InspectorPanel from './inspector-panel';

type Props = { sourceUrl: string };

type MobileTab = 'parts' | 'inspector';

export default function EditorClient({ sourceUrl }: Props) {
  // Desktop panel states
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  // Mobile bottom panel
  const [bottomOpen, setBottomOpen] = useState(true);
  const [mobileTab, setMobileTab] = useState<MobileTab>('parts');

  return (
    <div className={editorPage}>
      {/* Canvas fullscreen: 패널 토글과 무관하게 항상 화면 꽉 */}
      <div className={canvasLayer}>
        <Viewer sourceUrl={sourceUrl} />
      </div>

      {/* ---------------- Desktop: Left overlay panel ---------------- */}
      <aside
        className={clsx(leftPanel, !leftOpen && leftClosed)}
        aria-hidden={!leftOpen}
      >
        {/* 돌출 핸들 */}
        <button
          type="button"
          className={leftHandle}
          aria-label={leftOpen ? 'Close left panel' : 'Open left panel'}
          onClick={() => setLeftOpen((v) => !v)}
        >
          <div className={handleArrow}>
            {leftOpen ? <LuChevronLeft /> : <LuChevronRight />}
          </div>
        </button>
        <div className={panelSurface}>
          <div className={panelBody}>
            <PartsPanel />
          </div>
        </div>
      </aside>

      {/* ---------------- Desktop: Right overlay panel ---------------- */}
      <aside
        className={clsx(rightPanel, !rightOpen && rightClosed)}
        aria-hidden={!rightOpen}
      >
        <button
          type="button"
          className={rightHandle}
          aria-label={rightOpen ? 'Close right panel' : 'Open right panel'}
          onClick={() => setRightOpen((v) => !v)}
        >
          <div className={handleArrow}>
            {rightOpen ? <LuChevronRight /> : <LuChevronLeft />}
          </div>
        </button>

        <div className={panelSurface}>
          <div className={panelBody}>
            <InspectorPanel />
          </div>
        </div>
      </aside>

      {/* ---------------- Mobile: Bottom unified panel ---------------- */}
      <section
        className={clsx(bottomPanel, !bottomOpen && bottomClosed)}
        aria-hidden={!bottomOpen}
      >
        {/* 닫힘 상태에서도 남는 “손잡이 바” */}
        <div className={bottomHandleRow}>
          <button
            type="button"
            aria-label={bottomOpen ? 'Close panel' : 'Open panel'}
            onClick={() => setBottomOpen((v) => !v)}
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
              border: 0,
            }}
          >
            <span className={bottomGrabber} />
          </button>
        </div>

        {/* 패널 전환 탭: 좌측패널/우측패널 개념을 모바일에서는 하나로 합치되,
           상단 탭에서 현재 "Parts"인지 "Inspector"인지 선택 */}
        <div className={bottomTabs}>
          <button
            className={clsx(
              bottomTab,
              mobileTab === 'parts' && bottomTabActive
            )}
            onClick={() => {
              setBottomOpen(true);
              setMobileTab('parts');
            }}
          >
            Parts
          </button>
          <button
            className={clsx(
              bottomTab,
              mobileTab === 'inspector' && bottomTabActive
            )}
            onClick={() => {
              setBottomOpen(true);
              setMobileTab('inspector');
            }}
          >
            Inspector
          </button>
        </div>

        <div className={bottomContent}>
          {mobileTab === 'parts' ? <PartsPanel /> : <InspectorPanel />}
        </div>
      </section>
    </div>
  );
}
