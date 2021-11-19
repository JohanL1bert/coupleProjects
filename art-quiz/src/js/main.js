import dataHTML from "./data_html/data_page";
import selectors from "./data_html/selector";

class PrerenderPage {
  constructor(page, selector) {
    this.page = page;
    this.selector = selector;
  }

  renderPage() {
    this.selector.artSectionSel.insertAdjacentHTML(
      "afterbegin",
      `${this.page.mainPage}`
    );
    this.selector.footerSel.insertAdjacentHTML(
      "afterbegin",
      `${this.page.footer}`
    );
  }
}

const startPage = new PrerenderPage(dataHTML, selectors);
startPage.renderPage();

const settingElement = selectors.headerSettingSel;

const openSetting = () => {
  console.log(1);
};

settingElement.addEventListener("click", openSetting);
