import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get the absolute path to the HTML file
        # This is necessary because the script is run from the root of the repo
        file_path = os.path.abspath('pages/dispute_resolution_main.html')

        await page.goto(f'file://{file_path}')

        # Take a screenshot in light mode
        await page.screenshot(path='jules-scratch/verification/light-mode.png')

        # Click the theme toggle button
        await page.click('#theme-toggle')

        # Take a screenshot in dark mode
        await page.screenshot(path='jules-scratch/verification/dark-mode.png')

        # Fill out the form
        await page.fill('#storyA', 'This is a test story for Party A. I am writing a long story to meet the 50 character requirement.')
        await page.fill('#storyB', 'This is a test story for Party B. I am also writing a long story to meet the 50 character requirement.')

        # Click the solve dispute button
        await page.click('#solveButton')

        # Wait for the results to appear
        await page.wait_for_selector('#resultsSection:not(.hidden)')

        # Take a screenshot of the results
        await page.screenshot(path='jules-scratch/verification/results.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
