import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jn-form',
  styleUrl: 'jn-form.scss',
  scoped: true,
  shadow: false
})
export class JnForm {
  @Prop() title: string;

  render() {
    const title: HTMLElement = this.title == null ? null : <h1>{this.title}</h1>;

    return (
      <Host>
        <form>
          {title}
          <slot></slot>
        </form>
      </Host>
    );
  }
}
