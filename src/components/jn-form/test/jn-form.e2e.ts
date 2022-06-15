import { newE2EPage } from '@stencil/core/testing';

describe('jn-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jn-form></jn-form>');

    const element = await page.find('jn-form');
    expect(element).toHaveClass('hydrated');
  });
});
