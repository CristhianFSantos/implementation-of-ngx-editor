import { Toolbar } from 'ngx-editor';

export const TOOLBAR_NGX: Toolbar = [
  ['bold', 'italic'],
  ['underline', 'strike'],
  [{ heading: ['h1', 'h2', 'h3', 'h4'] }],
  ['align_left', 'align_center', 'align_right', 'align_justify'],
  ['ordered_list', 'bullet_list'],
  ['link'],
  ['code', 'blockquote'],
];

export const MODEL_EDITOR = {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: {
        level: 3,
        align: null,
      },
      content: [
        {
          type: 'text',
          text: 'TERMO DE ACEITAÇÃO DE POC',
        },
      ],
    },
    {
      type: 'paragraph',
      attrs: {
        align: null,
      },
      content: [
        {
          type: 'text',
          text: 'As Partes concordam expressamente com a poc apresentada que tem como objetivo substituir uma bilbioteca paga do projeto.',
        },
      ],
    },
    {
      type: 'paragraph',
      attrs: {
        align: null,
      },
      content: [
        {
          type: 'text',
          text: 'As Partes, reconhecem a veracidade, autenticidade, integridade, validade e eficácia deste documento e seus termos, incluindo seus anexos, de acordo com o art. 219 do Código Civil.',
        },
      ],
    },
    {
      type: 'paragraph',
      attrs: {
        align: null,
      },
      content: [
        {
          type: 'text',
          text: 'As Partes, ao confirmarem aceitarão a implementação da lib ngx-editor, nos termos do art. 99, § 99º, da Medida Provisória nº 9.999-9, de 99 de agosto de 9999 (“MP nº 9.999-9”), renunciam ao direito de impugnar a sua validade e/ou eficácia em quaisquer circunstâncias.',
        },
      ],
    },
  ],
};
