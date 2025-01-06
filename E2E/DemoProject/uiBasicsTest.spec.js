const {test, expect}=require('@playwright/test')

test("Browser Context Test",async ({browser})=>{


const context=await browser.newContext()
const page=await context.newPage()
const cardTitle=page.locator(".card-body a")
const userName=page.locator('#username')
const password=page.locator('#password')
const signIn=page.locator('#signInBtn')
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
//console.log(await page.title())
await userName.fill("rahulshettyacademy34")
await password.fill("learning")
await page.locator('#terms').check()
await signIn.click()
const errormessage=await page.locator('[style*="block"]').textContent()
console.log(errormessage)
await userName.fill("");
await userName.fill("rahulshettyacademy")
await password.fill("learning")
await signIn.click()
console.log(await cardTitle.nth(3).textContent())
const allTitle= await cardTitle.allTextContents()
console.log(allTitle)


//await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop")
// console.log(await page.title())
// await expect(page).toHaveTitle("ProtoCommerce")
//await page.waitForTimeout(2000)

})

test("Playwright page Test",async ({page})=>{

    
    await page.goto("https://www.google.com/")
    const pagetitle=await page.title()
    await expect(page).toHaveTitle("Google")
    
       
})

test("UI Controls",async ({page})=>{

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName=page.locator('#username')
    const password=page.locator('#password')
    const signIn=page.locator('#signInBtn')
    const documentLink=page.locator("[href*='documents-request']")
    const dropdown=page.locator('select.form-control')
    await dropdown.selectOption("consult")
    await page.screenshot()
    await page.locator(".radiotextsty").nth(1).click()
    await page.locator("#okayBtn").click()
    await expect(page.locator(".radiotextsty").last()).toBeChecked()
    await page.waitForTimeout(2000)
    await expect(documentLink).toHaveAttribute("class","blinkingText")
       
})

test.only("Child Window Testing",async({browser})=>{

    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink=page.locator("[href*='documents-request']")
    const [newPage]= await Promise.all(
    [
        context.waitForEvent('page'),
        documentLink.click(),
    ])

 const text= await newPage.locator(".red").textContent()
    const arrayTest=text.split("@")
    const domain=arrayTest[1].split(" ")[0]
   console.log(domain)
   await page.locator("#username").fill(domain)
   page.pause()
   console.log(await page.locator("#username").textContent())


})