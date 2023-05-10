import { expect, test } from '@playwright/test';

test('index page', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('HumanCatfood');
	await expect(page.getByRole('heading', { name: 'Hi!' })).toBeVisible();
});
