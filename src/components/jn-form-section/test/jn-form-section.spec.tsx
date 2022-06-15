import { newSpecPage } from '@stencil/core/testing';
import { JnFormSection } from '../jn-form-section';

describe('jn-form-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JnFormSection],
      html: `<jn-form-section></jn-form-section>`,
    });
    expect(page.root).toEqualHtml(`
      <jn-form-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jn-form-section>
    `);
  });
});
