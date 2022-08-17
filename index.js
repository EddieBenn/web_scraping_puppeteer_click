import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({ 
        headless: false,
        slowMo: 100 
        });
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com");

    await page.click('a[href="/login"]');

    await page.type("#username", "EddieBenn");
    await page.type("#password", "Password432");

    await page.click('input[value="Login"]');

    await page.waitFor(7000);

    await browser.close();
})();