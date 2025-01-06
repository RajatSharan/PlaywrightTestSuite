const {test,expect,Locator}=require("@playwright/test")

test("Register Page",async({browser})=>{


    
const context=await browser.newContext()
const page= await context.newPage()
await page.goto("https://rahulshettyacademy.com/client/")
await page.locator("//a[text()='Register here']").click()
await page.locator("#firstName").fill("Rajat")
await page.locator("#lastName").fill("Sharan")
await page.locator("#userEmail").fill("sharan.rajat11@gmail.com")
await page.locator("#userMobile").fill("9999999999")
await page.locator('#userPassword').fill("Rajat@1234")
await page.locator('#confirmPassword').fill("Rajat@1234")
await page.locator("input[type='checkbox']").click()
await page.locator("#login")
//const text=await page.locator("//h1[text()='Account Created Successfully']")
//console.log(text.innerText())
//await expect(text).toHaveText("Account Created Successfully")
await page.waitForTimeout(3000)







})