import { newSpecPage } from '@stencil/core/testing';
import { JnFormField } from '../jn-form-field';

describe('jn-form-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JnFormField],
      html: `<jn-form-field></jn-form-field>`,
    });
    expect(page.root).toEqualHtml(`
      <jn-form-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jn-form-field>
    `);
  });
});
