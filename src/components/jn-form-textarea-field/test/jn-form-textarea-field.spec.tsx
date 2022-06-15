import { newSpecPage } from '@stencil/core/testing';
import { JnFormTextareaField } from '../jn-form-textarea-field';

describe('jn-form-textarea-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JnFormTextareaField],
      html: `<jn-form-textarea-field></jn-form-textarea-field>`,
    });
    expect(page.root).toEqualHtml(`
      <jn-form-textarea-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jn-form-textarea-field>
    `);
  });
});
