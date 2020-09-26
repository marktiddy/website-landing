const items = document.querySelectorAll(".item");
const menus = document.querySelectorAll(".menu");

//Menu needs listeners
menus.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    //Item has been clicked on
    //Remove selected from all items and add it to new item
    //Remove hide from all menus and add to current
    items.forEach((item) => {
      item.classList.remove("selected");
      item.classList.add("hide");
    });
    items[index].classList.add("selected");
    items[index].classList.add("hidden");
    items[index].classList.remove("hide");
    setTimeout(() => {
      items[index].classList.remove("hidden");
    }, 100);
    menus.forEach((m) => {
      m.classList.remove("hide");
    });
    menu.classList.add("hide");
  });
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("selected")) {
      items.forEach((item) => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
        }
      });
      item.classList.add("selected");
    } else {
      const id = item.getAttribute("id");
      switch (id) {
        case "portfolio":
          window.location.href = "http://www.portfolio.marktiddy.co.uk";
          break;
        case "youtube":
          window.location.href = "http://youtube.com/markstechvlogs";
          break;
        case "music":
          window.location.href = "http://www.backroomstereo.co.uk";
          break;
        case "blog":
          window.location.href = "http://www.blog.marktiddy.co.uk";
          break;
      }
    }
  });
});

const scrollDownButton = document.querySelector(".scroll-down");

scrollDownButton.addEventListener("click", () => {
  window.scrollBy(0, window.innerHeight);
});
