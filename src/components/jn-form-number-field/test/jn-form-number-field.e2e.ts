import { newE2EPage } from '@stencil/core/testing';

describe('jn-form-number-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jn-form-number-field></jn-form-number-field>');

    const element = await page.find('jn-form-number-field');
    expect(element).toHaveClass('hydrated');
  });
});
