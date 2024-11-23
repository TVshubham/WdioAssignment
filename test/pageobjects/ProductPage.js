const { expect } = require('chai');

class ProductPage {
    async switchToProductTab() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
    }

    get productPriceElement() {
        return $("//*[@id='corePriceDisplay_desktop_feature_div']/div[1]/span[3]/span[2]/span[2]");
    }

    get getproductTitle() {
        return $("//span[@id='productTitle']");
    }

    async getProductPrice() {
        const priceText = await this.productPriceElement.getText();
        return parseInt(priceText.replace(/,/g, ''), 10);
    }

    async validatePrice(expectedPrice) {
        const price = await this.getProductPrice();
        expect(price).to.equal(expectedPrice, 'Product price is different');
    }

    async validateTitle(product) {
        const Actual_Product_Title = await this.getproductTitle.getText();
        expect(product).to.equal(Actual_Product_Title, 'Product is different');
    }

    async close_Extra_Tabs() {
         const handles = await browser.getWindowHandles();
         await browser.closeWindow();
         await browser.switchToWindow(handles[0]);
    }



}

module.exports = new ProductPage();
