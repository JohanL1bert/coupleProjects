const smoothScroll = () => {
  const links = document.querySelectorAll("a.header__link, a.footer__link");

  links.forEach((element) =>
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const id = element.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    })
  );
};

smoothScroll();
