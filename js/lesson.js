const tabBlocks = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const tabItemsContainer = document.querySelector(".tab_content_items");

const hideAllBlocks = () => {
  tabBlocks.forEach((block) => {
    block.style.display = "none";
  });
  tabItems.forEach((tab) => {
    tab.classList.remove("tab_content_item_active");
  });
};

const showBlock = (index) => {
  tabBlocks[index].style.display = "block";
  tabItems[index].classList.add("tab_content_item_active");
};

hideAllBlocks();
showBlock(0);

tabItemsContainer.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItems.forEach((tab, tabIndex) => {
      if (event.target === tab) {
        hideAllBlocks();
        showBlock(tabIndex);
      }
    });
  }
};
