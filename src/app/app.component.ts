import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Editor, toHTML, Validators } from 'ngx-editor';
import { MODEL_EDITOR, TOOLBAR_NGX } from './doc';

export interface valueEditor {
  value: string;
  disabled: boolean;
}

@Component({
  selector: 'te-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toolbarNgx = TOOLBAR_NGX;
  menuDesabled = true;
  pageElementHTML = toHTML(MODEL_EDITOR);

  editor = new Editor();
  formEditText: UntypedFormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  private buildForm(): void {
    this.formEditText = new UntypedFormGroup({
      editor: new UntypedFormControl(
        { value: MODEL_EDITOR, disabled: false },
        Validators.required()
      ),
    });

    this.formEditText.get('editor')?.disable();
  }

  private prepareDoc(havePrint = false): void {
    const page = window.open(
      '',
      '_blanc',
      'height=700, width=700, resizable, scrollbars=yes'
    );
    page?.document.write(`
      <html>
        <head>
            <title>ArqSign</title>
        </head>
        <body>
            ${this.pageElementHTML}
        </body>
      </html>`);
    page?.document.close();
    if (havePrint) page?.print();
  }

  toogleEdit(): void {
    this.menuDesabled = !this.menuDesabled;
    if (this.menuDesabled) {
      this.formEditText.get('editor')?.disable();
      return;
    }
    this.formEditText.get('editor')?.enable();
  }

  cancel(): void {
    this.toogleEdit();
    this.formEditText.get('editor')?.setValue(MODEL_EDITOR);
  }

  send(): void {
    this.pageElementHTML = toHTML(this.formEditText.get('editor')?.value);
  }

  print = (): void => this.prepareDoc(true);

  showDoc = (): void => this.prepareDoc(false);
}
