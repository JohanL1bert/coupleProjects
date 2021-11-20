import dataHTML from "../data_html/data_page";
import selectors2 from "../data_html/selector2.json";

const renderMain = (tag, htmlData) => {
  tag.map((el, index) =>
    el.insertAdjacentHTML("afterbegin", `${htmlData[index]}`)
  );
};

const pageRender = (html, obj) => {
  Object.keys(obj).forEach((key) => {
    if (key === "mainPage") {
      const art = document.querySelector(`${obj[key]}`);
      const header = document.querySelector(`.header`);
      const footer = document.querySelector(`.footer`);
      renderMain(
        [art, header, footer],
        [html.mainPage, html.header, html.footer]
      );
    }
  });
};

pageRender(dataHTML, selectors2);

export default pageRender;
