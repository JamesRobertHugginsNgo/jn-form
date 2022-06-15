import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jn-form-row',
  styleUrl: 'jn-form-row.scss',
  scoped: true,
  shadow: false
})
export class JnFormRow {
  render() {
    return (
      <Host>
        <div class={'row'}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
