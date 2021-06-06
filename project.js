const puppeteer = require("puppeteer");


async function main(){
    let browser = await puppeteer.launch({
        headless: false, 
        defaultViewport: null, 
        args: ["--start-maximized", "--enable-automation"],
        slowMo: 200
    });
    let pages = await browser.pages();
    let tab = pages[0];
     await tab.goto("https://www.accuweather.com/");
     await typeLocation(browser, tab);
    
}main();

 async function typeLocation(browser, tab){
    let locations = ["Pitampura Delhi", "Tilak Nagar Delhi"];
     for(let i=0; i<locations.length; i++){
         await tab.click("input.search-input");
         await tab.type("input.search-input", locations[i]);
         await tab.waitForSelector('.icon-search.search-icon', {visible:true});
         await tab.click(".icon-search.search-icon");
         await tab.waitForSelector("a.subnav-item", {visible:true});
         let allLinks = await tab.$$('a.subnav-item');
         let title = ["Now.png", "Hourly.png", "Daily.png", "Radar.png", "Monthly.png", "AirQuality.png"];
         for(let j=0; j<allLinks.length; j++){
             let link = await tab.evaluate(function(element){return element.getAttribute("href");}, allLinks[j]);
             link = "https://www.accuweather.com/"+link;
             await tab.waitForTimeout(4000);
             getDetails(browser, link);
             await tab.waitForTimeout(4000);
             
         }
         await tab.goBack();

        
     }
 }
   async function getDetails(browser, link, name){
     let newTab = await browser.newPage();
     await newTab.goto(link);
     await newTab.waitForTimeout(8000);
      await newTab.close();
 }

 
 