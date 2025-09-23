import Toastify from 'toastify-js';
import { showElements, hideElements } from '@/utils/domUtils.js';

export function createSetSelectedTemplate(elements, setState, getState) {
  const { newProducts, openCampaign } = elements;

  return function setSelectedTemplate(ev) {
    const selectedTemplates = getState('selectedTemplates');
    const selectedTemplate = selectedTemplates.find(
      (template) => template.type + '_' + template.name === ev.target.value
    );

    if (!selectedTemplate) {
      Toastify({
        text: `Template ${ev.target.value} not found.`,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }

    // Show/hide elements based on template type
    showElements(newProducts);

    if (selectedTemplate.type === 'banner') {
      hideElements(openCampaign);
    } else {
      showElements(openCampaign);
    }

    setState('template', selectedTemplate);
  };
}
