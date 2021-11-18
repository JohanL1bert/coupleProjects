import dataHTML from "./data_html/data_page";
import selectors from "./data_html/selector";

class PrerenderPage {
  constructor(page, selector) {
    this.page = page;
    this.selector = selector;
  }

  renderPage() {
    this.selector.artSection.insertAdjacentHTML(
      "afterbegin",
      `${this.page.mainPage}`
    );
  }
}

const startPage = new PrerenderPage(dataHTML, selectors);
startPage.renderPage();
