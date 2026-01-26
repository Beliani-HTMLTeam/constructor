import { showElements, hideElements } from '@/utils/domUtils.js';

import { toast } from 'sonner';

export function createSetSelectedTemplate(elements, setState, getState) {
  const { openCampaign } = elements;

  return function setSelectedTemplate(ev) {
    const selectedTemplates = getState('selectedTemplates');
    const selectedTemplate = selectedTemplates.find(
      (template) => template.type + '_' + template.name === ev.target.value
    );

    if (!selectedTemplate) return toast.error(`Template ${ev.target.value} not found.`);

    if (selectedTemplate.type === 'banner') {
      hideElements(openCampaign);
    } else {
      showElements(openCampaign);
    }

    setState('template', selectedTemplate);
  };
}
