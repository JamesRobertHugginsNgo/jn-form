import { newSpecPage } from '@stencil/core/testing';
import { JnFormNumberField } from '../jn-form-number-field';

describe('jn-form-number-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JnFormNumberField],
      html: `<jn-form-number-field></jn-form-number-field>`,
    });
    expect(page.root).toEqualHtml(`
      <jn-form-number-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jn-form-number-field>
    `);
  });
});
