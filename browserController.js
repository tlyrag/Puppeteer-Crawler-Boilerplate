import puppeteer from 'puppeteer';
import { url } from './constants.js';

export default {
    async startBrwoser() {
        try{
            const browser = await puppeteer.launch({
                headless:false,
                ignoreHTTPSErrors: true,
                defaultViewport: null
            });
            const page = await browser.newPage();
            await page.goto(url);
        }
        catch{}
    }
}
