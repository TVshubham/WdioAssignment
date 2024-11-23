const homePage = require('../pageobjects/HomePage');
const searchResultsPage = require('../pageobjects/SearchResultsPage');
const productPage = require('../pageobjects/ProductPage');
const fs =require('fs');
let product_details = JSON.parse(fs.readFileSync("test/TestData/Products_Name_&_Price.js"));



describe("Ecommerce Application", () => {
 product_details.forEach(({product_Name,product_price}) => {
    
 
    it("End to End Test", async () => {
        const product = product_Name;
       const expectedPrice = product_price ;

        // Step 1: Open Amazon Home Page and Search Product
        await homePage.open();
        await homePage.searchProduct(product);

        // Step 2: Validate Search Results
        await searchResultsPage.validateProductInResults(product);

        // Step 3: Apply 5G Filter and Select Product
        await searchResultsPage.apply5GFilter();
        await searchResultsPage.selectProduct(product);

        // Step 4: Switch to Product Tab and Validate Price and  product Tittle
        await productPage.switchToProductTab();
        await productPage.validatePrice(expectedPrice);
        await productPage.validateTitle(product);

        await productPage.close_Extra_Tabs();

    });



});
});
