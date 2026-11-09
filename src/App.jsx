import React, { useState } from 'react';
import { templatesRegistry } from './templates/registry';
import TemplateSwitcherBar from './components/TemplateSwitcherBar';

export default function App() {
  const [activeTemplateId, setActiveTemplateId] = useState('template-royal-udaipur');

  const currentTemplate =
    templatesRegistry.find((t) => t.id === activeTemplateId) || templatesRegistry[0];

  const TemplateComponent = currentTemplate.component;

  return (
    <div className="relative min-h-screen bg-stone-900">
      {/* Template Switcher Bar */}
      <TemplateSwitcherBar
        activeTemplateId={activeTemplateId}
        onSelectTemplate={setActiveTemplateId}
      />

      {/* Render Selected Template with key for clean state transitions */}
      {TemplateComponent && (
        <TemplateComponent
          key={currentTemplate.id}
          data={currentTemplate.defaultData}
          onRsvpSubmit={(rsvpData) => {
            console.log('RSVP received for', currentTemplate.name, rsvpData);
          }}
        />
      )}
    </div>
  );
}
