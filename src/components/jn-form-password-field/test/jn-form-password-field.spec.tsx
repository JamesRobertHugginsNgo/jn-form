import { newSpecPage } from '@stencil/core/testing';
import { JnFormPasswordField } from '../jn-form-password-field';

describe('jn-form-password-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JnFormPasswordField],
      html: `<jn-form-password-field></jn-form-password-field>`,
    });
    expect(page.root).toEqualHtml(`
      <jn-form-password-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jn-form-password-field>
    `);
  });
});
