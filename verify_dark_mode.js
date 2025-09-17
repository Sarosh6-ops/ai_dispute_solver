const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the local file
    await page.goto('file://' + __dirname + '/pages/dispute_resolution_main.html', { waitUntil: 'networkidle' });

    // --- Light Mode Verification ---
    console.log('Verifying Light Mode...');
    // Ensure light mode is active by default (or by clearing local storage)
    await page.evaluate(() => localStorage.removeItem('color-theme'));
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Wait for animations
    await page.screenshot({ path: 'light_mode_verification.png', fullPage: true });
    console.log('Light mode screenshot taken.');

    // --- Dark Mode Toggle Verification ---
    console.log('Verifying Dark Mode...');
    // Click the theme toggle button
    await page.click('#theme-toggle');
    // Wait for the theme to change and animations to complete
    await page.waitForFunction(() => document.documentElement.classList.contains('dark'));
    await page.waitForTimeout(1000); // Wait for animations
    await page.screenshot({ path: 'dark_mode_verification.png', fullPage: true });
    console.log('Dark mode screenshot taken.');

    // --- Persistence Verification ---
    console.log('Verifying theme persistence...');
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    if (isDark) {
        console.log('Theme persistence verified successfully.');
    } else {
        throw new Error('Theme persistence failed. Dark mode was not applied after reload.');
    }
    await page.screenshot({ path: 'dark_mode_persistence_verification.png', fullPage: true});


  } catch (error) {
    console.error('An error occurred during verification:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
