import { newE2EPage } from '@stencil/core/testing';

describe('jn-form-textarea-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jn-form-textarea-field></jn-form-textarea-field>');

    const element = await page.find('jn-form-textarea-field');
    expect(element).toHaveClass('hydrated');
  });
});
