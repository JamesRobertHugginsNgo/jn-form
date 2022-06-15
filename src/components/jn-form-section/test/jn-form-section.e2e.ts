import { newE2EPage } from '@stencil/core/testing';

describe('jn-form-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jn-form-section></jn-form-section>');

    const element = await page.find('jn-form-section');
    expect(element).toHaveClass('hydrated');
  });
});
