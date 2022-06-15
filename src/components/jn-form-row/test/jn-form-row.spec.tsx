import { newSpecPage } from '@stencil/core/testing';
import { JnFormRow } from '../jn-form-row';

describe('jn-form-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JnFormRow],
      html: `<jn-form-row></jn-form-row>`,
    });
    expect(page.root).toEqualHtml(`
      <jn-form-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jn-form-row>
    `);
  });
});
