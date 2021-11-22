const renderHTML = (selector, html) => {
  selector.map((el, index) => el.insertAdjacentHTML("afterbegin", html[index]));
};

export default renderHTML;
