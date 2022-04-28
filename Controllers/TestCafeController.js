import puppeteer from 'puppeteer';
import { url } from '../constants.js';


let page;
let browser;

export default {
    async startBrwoser(req) {
         browser = await puppeteer.launch({
            headless:false,
            ignoreHTTPSErrors: true,
            defaultViewport: null
        });
        page = await browser.newPage();
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
    },
    async populateForm(req) {
        console.log(req.body)
        let username = req.body.username;
        let remote = req.body.remote
        let reuse = req.body.reuse
        let background = req.body.background
        let continuous = req.body.continuous
        let traffic = req.body.background
        try{
            await page.type('#developer-name',username)
            if(remote) {
                await page.click('#remote-testing')
            }
            if(reuse) {
                await page.click('#reusing-js-code')
            }
            if(background) {
                await page.click('#background-parallel-testing')
            }
            if(continuous) {
                await page.click('#continuous-integration-embedding')
            }
            if(traffic) {
                await page.click('#traffic-markup-analysis')
            }                      
            return {
                status:200,
                resultMessage:'Action Successfully performed'
            }
        }
        catch (err) {
            return {status:500, message: `Application error ${err}`}
        }
    }

}
