import { newE2EPage } from '@stencil/core/testing';

describe('jn-form-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jn-form-text-field></jn-form-text-field>');

    const element = await page.find('jn-form-text-field');
    expect(element).toHaveClass('hydrated');
  });
});
