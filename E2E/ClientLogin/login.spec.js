const {test,expect}=require("@playwright/test")

test("Login Page",async({browser})=>{


const context=await browser.newContext()
const page= await context.newPage()
const products=await page.locator(".card-body")
const productName='Banarsi Saree'
await page.goto("https://rahulshettyacademy.com/client/")
await page.locator("#userEmail").fill("rajatsharan07@gmail.com")
await page.locator('#userPassword').fill("Test@123")
await page.locator("#login").click()
await page.waitForLoadState('networkidle')
const titles=await page.locator('.card-body b').allTextContents()
console.log(titles)
//'IPHONE 13 PRO'

const count= await products.count()
//console.log(count)
for(let i=0;i<count;i++){

    if(await products.nth(i).locator("b").textContent()=== productName)
    {

        await products.nth(i).locator("text= Add To Cart").click()
        break;

    }
}

await page.locator("[routerlink*=cart]").click()
await page.locator("div li").first().waitFor()
const bool=await page.locator("h3:has-text('Banarsi Saree')").isVisible()
expect(bool).toBeTruthy()
await page.locator("button[text='checkout']").click()
await page.locator()

})
