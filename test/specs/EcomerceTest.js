const homePage = require('../pageobjects/HomePage');
const searchResultsPage = require('../pageobjects/SearchResultsPage');
const productPage = require('../pageobjects/ProductPage');

describe("Ecommerce Application", () => {
    it("End to End Test", async () => {
        const product = 'Apple iPhone 15 (128 GB) - Blue';
        const expectedPrice = 65900;

        // Step 1: Open Amazon Home Page and Search Product
        await homePage.open();
        await homePage.searchProduct(product);

        // Step 2: Validate Search Results
        await searchResultsPage.validateProductInResults(product);

        // Step 3: Apply 5G Filter and Select Product
        await searchResultsPage.apply5GFilter();
        await searchResultsPage.selectProduct(product);

        // Step 4: Switch to Product Tab and Validate Price
        await productPage.switchToProductTab();
        await productPage.validatePrice(expectedPrice);
    });
});
