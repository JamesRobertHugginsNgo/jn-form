import { newSpecPage } from '@stencil/core/testing';
import { JnFormTextField } from '../jn-form-text-field';

describe('jn-form-text-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JnFormTextField],
      html: `<jn-form-text-field></jn-form-text-field>`,
    });
    expect(page.root).toEqualHtml(`
      <jn-form-text-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jn-form-text-field>
    `);
  });
});
