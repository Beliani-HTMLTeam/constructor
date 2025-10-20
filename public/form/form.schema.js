const schema = [
  // page 1
  [
    // Name and Date
    {
      type: 'group',
      title: 'Name and Date',
      rows: [
        [
          {
            name: 'campaignName',
            id: 'campaignName',
            type: 'text',
            label: 'Campaign Name',
            placeholder: 'Autumn colors',
            required: true,
          },
          {
            name: 'campaignDate',
            id: 'campaignDate',
            type: 'date',
            label: 'Campaign Date',
            required: true,
          },
        ],
      ],
    },

    // Identifiers
    {
      type: 'group',
      title: 'Identifiers',
      rows: [
        [
          {
            name: 'newsletterId',
            id: 'newsletterId',
            type: 'number',
            label: 'Newsletter ID',
            placeholder: '35735',
            required: true,
          },
          {
            name: 'lpId',
            id: 'lpId',
            type: 'number',
            label: 'Content Page ID',
            placeholder: '21163',
          },
          {
            name: 'issueCardId',
            id: 'issueCardId',
            type: 'number',
            label: 'Issue Card ID',
            placeholder: '5437',
          },
        ],
      ],
    },

    // Special LP Ids
    {
      type: 'group',
      title: 'Special Contents',
      rows: [
        [
          {
            name: 'specialLPToggle',
            id: 'specialLPToggle',
            type: 'checkbox',
            label: 'Special LP Ids?',
          },
          {
            name: 'specialLPIds',
            id: 'specialLPIds',
            type: 'textarea',
            label: 'Special LP IDs',
            placeholder: '{\n\t"[COUNTRY]": [LP_ID]\n\n\t<< example: >>\n\t"PL": 2137\n}',
            disabled: true,
          },
        ],
      ],
    },

    // Alarm Settings
    {
      type: 'group',
      title: 'Alarm Settings',
      rows: [
        [
          {
            name: 'alarmEnabled',
            id: 'alarmEnabled',
            type: 'checkbox',
            label: 'Alarm Enabled?',
          },
          {
            name: 'alarmDescription',
            id: 'alarmDescription',
            type: 'text',
            label: 'Alarm Description',
            placeholder: 'Check campaign banners issue status',
            disabled: true,
          },
        ],
      ],
    },

    // Other Settings
    {
      type: 'group',
      title: 'Other Settings',
      rows: [
        [
          {
            name: 'isArchive',
            id: 'isArchive',
            type: 'checkbox',
            label: 'Is Archived?',
          },
          {
            name: 'optimizeImages',
            id: 'optimizeImages',
            type: 'checkbox',
            label: 'Optimize Images?',
          },
          {
            name: 'familyVersion',
            id: 'familyVersion',
            type: 'toggle',
            label: 'Family Version',
            option1: { label: 'NEW', value: 0 },
            option2: { label: 'OLD', value: 1 },
            defaultValue: 0, // NEW should be default
          },
        ],
        [
          {
            name: 'figmaURL',
            id: 'figmaURL',
            type: 'text',
            label: 'Figma URL',
            placeholder: 'https://www.figma.com/design...',
          },
        ],
      ],
    },
  ],

  // page2
  [
    // Template Settings
    {
      type: 'group',
      title: 'Template Settings',
      rows: [
        [
          {
            name: 'background',
            id: 'background',
            type: 'colorhex',
            label: 'Background:',
            placeholder: '#750000',
            required: true,
          },
          {
            name: 'color',
            id: 'color',
            type: 'colorhex',
            placeholder: '#000000',
            label: 'Color:',
            required: true,
          },
        ],
      ],
    },

    // Inside Settings
    {
      type: 'group',
      title: 'Inside',
      rows: [
        [
          {
            name: 'insideEnabled',
            id: 'insideEnabled',
            type: 'checkbox',
            label: 'Inside Enabled?',
          },
          {
            name: 'insideColor',
            id: 'insideColor',
            type: 'colorhex',
            label: 'Color',
            placeholder: '#000000',
            disabled: true,
          },
          {
            name: 'insideBackground',
            id: 'insideBackground',
            type: 'colorhex',
            label: 'Background',
            placeholder: '#FFFFFF',
            disabled: true,
          },
          {
            name: 'insideType',
            id: 'insideType',
            type: 'text',
            label: 'Type',
            placeholder: 'code',
            disabled: true,
          },
          {
            name: 'insideImage',
            id: 'insideImage',
            type: 'text',
            label: 'Image',
            placeholder: '20250725free.jpg',
            disabled: true,
          },
          {
            name: 'insideTranslateImage',
            id: 'insideTranslateImage',
            type: 'checkbox',
            label: 'Add slug?',
            placeholder: '20250725free.jpg',
            disabled: true,
          },
        ],
      ],
    },

    // Intro Settings
    {
      type: 'group',
      title: 'Intro',
      rows: [
        [
          {
            name: 'introEnabled',
            id: 'introEnabled',
            type: 'checkbox',
            label: 'Intro Enabled?',
          },
          {
            name: 'introColor',
            id: 'introColor',
            type: 'colorhex',
            label: 'Color',
            placeholder: '#000000',
            disabled: true,
          },
          {
            name: 'introBackground',
            id: 'introBackground',
            type: 'colorhex',
            label: 'Background',
            placeholder: '#FFFFFF',
            disabled: true,
          },
          {
            name: 'introAlignment',
            id: 'introAlignment',
            type: 'text',
            label: 'Alignment',
            placeholder: 'left',
            disabled: true,
          },
          {
            name: 'introType',
            id: 'introType',
            type: 'text',
            label: 'Type',
            placeholder: 'paragraph',
            disabled: true,
          },
        ],
      ],
    },

    // Offer Part Settings
    {
      type: 'group',
      title: 'Offer Part',
      rows: [
        [
          {
            name: 'offerPartEnabled',
            id: 'offerPartEnabled',
            type: 'checkbox',
            label: 'OfferPart Enabled?',
          },
          {
            name: 'offerPartColor',
            id: 'offerPartColor',
            type: 'colorhex',
            label: 'Color',
            placeholder: '#000000',
            disabled: true,
          },
          {
            name: 'offerPartBackground',
            id: 'offerPartBackground',
            type: 'colorhex',
            label: 'Background',
            placeholder: '#FFFFFF',
            disabled: true,
          },
          {
            name: 'offerPartAlignment',
            id: 'offerPartAlignment',
            type: 'text',
            label: 'Alignment',
            placeholder: 'left',
            disabled: true,
          },
          {
            name: 'offerPartType',
            id: 'offerPartType',
            type: 'text',
            label: 'Type',
            placeholder: 'paragraph',
            disabled: true,
          },
        ],
      ],
    },
  ],
];

export { schema };
