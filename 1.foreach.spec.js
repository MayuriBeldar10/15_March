const {test,expect} = require("@playwright/test")

const data = require("../tests/TESTDATA/contactus.json");

data.forEach(element =>{
    test(`to verify multiple login details ${element.email}`, async({page})=>{
    await page.goto('https://ca.shopnewage.com/account/login')
    await page.locator('[id="customer-email"]').fill(element.email)
    await page.locator('input[id="customer-password"]').fill(element.pass)
    await page.waitForSelector('input[value="Sign In"]')
    await page.locator('input[value="Sign In"]').click()
    await page.pause()
    })   
    
});






