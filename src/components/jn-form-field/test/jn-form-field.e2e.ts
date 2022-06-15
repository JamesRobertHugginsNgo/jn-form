import { newE2EPage } from '@stencil/core/testing';

describe('jn-form-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jn-form-field></jn-form-field>');

    const element = await page.find('jn-form-field');
    expect(element).toHaveClass('hydrated');
  });
});
