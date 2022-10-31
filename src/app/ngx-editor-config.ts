import { Toolbar } from 'ngx-editor';

export const TOOLBAR_NGX: Toolbar = [
  ['bold', 'italic'],
  ['underline', 'strike'],
  ['code', 'blockquote'],
  ['ordered_list', 'bullet_list'],
  [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  ['link', 'image'],
  ['text_color', 'background_color'],
  ['align_left', 'align_center', 'align_right', 'align_justify'],
  ['horizontal_rule', 'format_clear'],
];

export const DEFAULT_VALUE = `
  <h3>TERMO DE ACEITAÇÃO DE POC</h3>
  <p>As Partes concordam expressamente com a poc apresentada que tem como objetivo substituir uma bilbioteca paga do projeto.</p>
  <p>As Partes, reconhecem a veracidade, autenticidade, integridade, validade e eficácia deste documento e seus termos, incluindo seus anexos, de acordo com o art. 219 do Código Civil.</p>
  <p>As Partes, ao confirmarem aceitarão a implementação da lib ngx-editor, nos termos do art. 99, § 99º, da Medida Provisória nº 9.999-9, de 99 de agosto de 9999 (“MP nº 9.999-9”), renunciam ao direito de impugnar a sua validade e/ou eficácia em quaisquer circunstâncias.</p>
`;

export const PRINT_HTML_ELEMENT = (htmlElementString: string) => {
  return ` 
  <html>
      <head>
          <title>ArqSign</title>
      </head>
  <body>
      ${htmlElementString}
  </body>
</html>`;
};
