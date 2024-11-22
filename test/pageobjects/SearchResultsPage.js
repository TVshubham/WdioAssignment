const { expect } = require('chai'); 
class SearchResultsPage {
    get firstProductText() {
        return $("//h2[@class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']");
    }

    get filter5GCheckbox() {
        return $("//a[@aria-label='Apply the filter 5G to narrow results']//i[@class='a-icon a-icon-checkbox']");
    }

    async validateProductInResults(product) {
        const productText = await this.firstProductText.getText();
        await console.log(productText);
       await expect(productText.toLowerCase()).to.include(product.toLowerCase(), `Expected '${productText}' to include '${product}'`); 
    }

    async apply5GFilter() {
        await this.filter5GCheckbox.click();
    }

    async selectProduct(product) {
        const productElement = await $("//span[normalize-space()='" + product + "']");
        await productElement.click();
    }
}

module.exports = new SearchResultsPage();
