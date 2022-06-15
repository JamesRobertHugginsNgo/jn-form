import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jn-form-section',
  styleUrl: 'jn-form-section.scss',
  scoped: true,
  shadow: false
})
export class JnFormSection {
  @Prop() classname: string = 'panel-default';
  @Prop() title: string;

  render() {
    const title: HTMLDivElement =
      this.title == null ? null : (
        <div class={'panel-heading'}>
          <h2 class={'panel-title'}>{this.title}</h2>
        </div>
      );

    return (
      <Host>
        <div class={`panel ${this.classname}`}>
          {title}
          <div class={'panel-body'}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
