import { newE2EPage } from '@stencil/core/testing';

describe('jn-form-password-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jn-form-password-field></jn-form-password-field>');

    const element = await page.find('jn-form-password-field');
    expect(element).toHaveClass('hydrated');
  });
});
