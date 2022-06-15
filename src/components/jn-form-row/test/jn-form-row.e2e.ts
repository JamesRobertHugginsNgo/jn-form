import { newE2EPage } from '@stencil/core/testing';

describe('jn-form-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jn-form-row></jn-form-row>');

    const element = await page.find('jn-form-row');
    expect(element).toHaveClass('hydrated');
  });
});
