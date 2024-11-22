const { expect } = require('chai'); 

class ProductPage {
    async switchToProductTab() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
    }

    get productPriceElement() {
        return $("//*[@id='corePriceDisplay_desktop_feature_div']/div[1]/span[3]/span[2]/span[2]");
    }

    async getProductPrice() {
        const priceText = await this.productPriceElement.getText();
        return parseInt(priceText.replace(/,/g, ''), 10);
    }

    async validatePrice(expectedPrice) {
        const price = await this.getProductPrice();
        expect(price).to.equal(expectedPrice, 'Product price is different');
    }
}

module.exports = new ProductPage();
