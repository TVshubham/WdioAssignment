  
    

const { expect } = require('chai'); 
 
describe("Ecommerce Application",async()=>
{
    it('End to End Test', async()=>
    {
       const product = 'Apple iPhone 15 (128 GB) - Blue';
       //const product =  'OnePlus 12R (Iron Gray, 16GB RAM, 256GB Storage)';
        await browser.url("https://www.amazon.in/");
        await browser.maximizeWindow();
       

       const Searchbuttons =  await $("//input[@id='twotabsearchtextbox']")
       
       await Searchbuttons.setValue(product);
   
       await  browser.keys('Enter');

       const productText =  await $("//h2[@class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']").getText();
       expect(productText.toLowerCase()).to.include(product.toLowerCase(), `Expected '${productText}' to include '${product}'`); 
       
 
       const filter = await $("//a[@aria-label='Apply the filter 5G to narrow results']//i[@class='a-icon a-icon-checkbox']");
       
       await filter.click();
       const clickonProduct = await $("//span[normalize-space()='" + product + "']");


   
        await clickonProduct.click();

        const handles = await browser.getWindowHandles();
        
        
        await browser.switchToWindow(handles[1]);
        priceText =(await $("//*[@id='corePriceDisplay_desktop_feature_div']/div[1]/span[3]/span[2]/span[2]").getText())
       const price = parseInt( priceText.replace(/,/g, ''), 10);
             console.log(price);
       expect(price).to.equal(65900, 'product price is Different');

 

    })


    
})

 

     
 



 