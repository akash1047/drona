// e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the header with link to home', async ({ page }) => {
    await page.goto('/');

    // Check if the header link 'Drona' exists and navigates to '/'
    const headerLink = page.locator('header a', { hasText: 'Drona' });
    await expect(headerLink).toHaveAttribute('href', '/');
  });

  test('should display the main title and description', async ({ page }) => {
    await page.goto('/');

    // Check for the main title
    const mainTitle = page.locator('main h1');
    await expect(mainTitle).toHaveText('Revolutionizing carrier with Drona.');

    // Check for the description
    const description = page.locator('main p', { hasText: 'Empowering academic personals' });
    await expect(description).toBeVisible();
  });

  test('should display the solution description paragraphs', async ({ page }) => {
    await page.goto('/');

    // Check for the first paragraph
    const firstParagraph = page.locator('main div p').first();
    await expect(firstParagraph).toContainText('In today\'s rapidly evolving world');

    // Check for the second paragraph
    const secondParagraph = page.locator('main div p').nth(1);
    await expect(secondParagraph).toContainText('Our very best solution aims to cater');
  });
});
