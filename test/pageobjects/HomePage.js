class HomePage {
    get searchBox() {
        return $("//input[@id='twotabsearchtextbox']");
    }

    async open() {
        await browser.url("https://www.amazon.in/");
        await browser.maximizeWindow();
    }

    async searchProduct(product) {
        await this.searchBox.setValue(product);
        await browser.keys('Enter');
    }
}

module.exports = new HomePage();
