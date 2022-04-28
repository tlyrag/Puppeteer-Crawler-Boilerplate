import puppeteer from 'puppeteer';
import { url } from '../constants.js';

export default {
    async startBrwoser(req) {
        const browser = await puppeteer.launch({
            headless:false,
            ignoreHTTPSErrors: true,
            defaultViewport: null
        });
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector('#main-form > div > header > h1')
            .then(()=>{
            })
            .catch(() =>{
                throw new Error('Unable to open website');
            })
        return {
            status:400,
            resultMessage:"Browser Successfully opened",
        }
    }
}
