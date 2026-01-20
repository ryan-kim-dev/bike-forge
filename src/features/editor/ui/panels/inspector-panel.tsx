import {
  inspectorPanelEmptyState,
  inspectorPanelContainer,
} from '@/styles/pages/editor/inspector-panel.css';

const MOCK_SELECTED_PART = {
  name: 'Front Fender',
  properties: [
    { id: 'color', label: 'Color', type: 'color', value: 'Matte Black' },
    {
      id: 'material',
      label: 'Material',
      type: 'material',
      value: 'Carbon Fiber',
    },
    { id: 'finish', label: 'Finish', type: 'material', value: 'Glossy' },
  ],
};

const HAS_SELECTION = true;

export default function InspectorPanel() {
  if (!HAS_SELECTION) {
    return (
      <div className={inspectorPanelEmptyState}>Select a part to inspect</div>
    );
  }
  return <div>InspectorPanel</div>;
}
