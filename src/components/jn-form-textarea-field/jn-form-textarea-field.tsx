import { Component, Host, h, Prop } from '@stencil/core';

let idCounter = 0;

@Component({
  tag: 'jn-form-textarea-field',
  styleUrl: 'jn-form-textarea-field.scss',
  scoped: true,
  shadow: false
})
export class JnFormTextareaField {
  @Prop() classname: string = 'col-xs-12';
  @Prop() id: string = `jn-form-textarea-field-${idCounter++}`;
  @Prop() title: string;
  @Prop() required: boolean = false;
  @Prop() prehelptext: string;
  @Prop() posthelptext: string;
  @Prop() readonly: boolean = false;
  @Prop() disabled: boolean = false;

  render() {
    const fieldProps: object = {
      classname: this.classname,
      id: this.id,
      title: this.title,
      required: this.required,
      prehelptext: this.prehelptext,
      posthelptext: this.posthelptext,
    };
    const inputProps: object = {
      'class': 'form-control',
      'id': `${this.id}Field`,
      'readonly': this.readonly,
      'disabled': this.disabled,
      'aria-describedby': this.prehelptext == null && this.posthelptext == null ? null : [
        this.prehelptext == null ? null : `${this.id}PreHelpText`,
        this.posthelptext == null ? null : `${this.id}PostHelpText`
      ].filter(Boolean).join(' '),
    };

    return (
      <Host>
        <jn-form-field {...fieldProps}>
          <textarea {...inputProps}></textarea>
        </jn-form-field>
      </Host>
    );
  }
}
