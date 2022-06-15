import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jn-form-field',
  styleUrl: 'jn-form-field.scss',
  scoped: true,
  shadow: false
})
export class JnFormField {
  @Prop() classname: string = 'col-xs-12';
  @Prop() id: string;
  @Prop() title: string;
  @Prop() required: boolean = false;
  @Prop() prehelptext: string;
  @Prop() posthelptext: string;

  render() {
    const fieldProps: object = {
      class: `${this.classname} form-group`,
      id: `${this.id}Element`,
    };
    const title: HTMLLabelElement =
      this.title == null && this.required ? null : (
        <label htmlFor={this.id == null ? null : `${this.id}Field`}>
          {this.title == null ? null : this.title}
          {this.title == null || this.required ? null : ' '}
          {this.required ? null : <span>(optional)</span>}
        </label>
      );
    const prehelptextProps: object = {
      id: this.id == null ? null : `${this.id}PreHelpText`,
      class: 'help-block',
    };
    const prehelptext: HTMLDivElement = this.prehelptext == null ? null : <div {...prehelptextProps}>{this.prehelptext}</div>;
    const posthelptextProps: object = {
      id: this.id == null ? null : `${this.id}PostHelpText`,
      class: 'help-block',
    };
    const posthelptext: HTMLDivElement = this.posthelptext == null ? null : <div {...posthelptextProps}>{this.posthelptext}</div>;

    return (
      <Host>
        <div {...fieldProps}>
          {title}
          {prehelptext}
          <slot></slot>
          {posthelptext}
        </div>
      </Host>
    );
  }
}
