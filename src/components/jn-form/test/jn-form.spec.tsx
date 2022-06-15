import { newSpecPage } from '@stencil/core/testing';
import { JnForm } from '../jn-form';

describe('jn-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JnForm],
      html: `<jn-form></jn-form>`,
    });
    expect(page.root).toEqualHtml(`
      <jn-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jn-form>
    `);
  });
});
