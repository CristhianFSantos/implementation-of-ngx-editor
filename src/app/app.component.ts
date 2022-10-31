import { Component } from '@angular/core';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { Editor, toDoc, toHTML, Validators } from 'ngx-editor';
import {
  DEFAULT_VALUE,
  PRINT_HTML_ELEMENT,
  TOOLBAR_NGX,
} from './ngx-editor-config';

@Component({
  selector: 'te-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toolbarNgx = TOOLBAR_NGX;

  pageElementHTML = DEFAULT_VALUE;
  pageDocJSON = toDoc(DEFAULT_VALUE);

  menuDesabled = true;

  editor = new Editor();
  formEditText: UntypedFormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  private getControlEditor = (): AbstractControl =>
    this.formEditText.controls['editor'];

  private buildForm(): void {
    this.formEditText = new UntypedFormGroup({
      editor: new UntypedFormControl(
        { value: this.pageDocJSON, disabled: false },
        Validators.required()
      ),
    });
    this.getControlEditor()?.disable();
  }

  private prepareDoc(havePrint = false): void {
    const page = window.open('', '_blanc', 'height=700, width=700');
    page?.document.write(PRINT_HTML_ELEMENT(this.pageElementHTML));
    page?.document.close();
    if (havePrint) page?.print();
  }

  toogleEdit(): void {
    this.menuDesabled = !this.menuDesabled;
    if (this.menuDesabled) {
      this.getControlEditor()?.disable();
      return;
    }
    this.getControlEditor()?.enable();
  }

  cancel(): void {
    this.toogleEdit();
    this.getControlEditor()?.setValue(this.pageDocJSON);
  }

  send(): void {
    this.pageElementHTML = toHTML(this.getControlEditor()?.value);
    console.log(this.pageElementHTML);
  }

  print = (): void => this.prepareDoc(true);

  showDoc = (): void => this.prepareDoc(false);
}
