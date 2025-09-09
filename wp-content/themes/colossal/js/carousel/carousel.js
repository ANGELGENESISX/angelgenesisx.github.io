document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".coverflow-item");
  const totalItems = items.length;
  let activeIndex = 5; // Start with the 4th item as active (index 3)

  function updateCoverflow() {
    items.forEach((item, index) => {
      // Remove all transformation classes
      item.classList.remove(
        "active",
        "previous",
        "next",
        "far-previous",
        "far-next",
        "far-previous-2",
        "far-next-2",
        "far-previous-3",
        "far-next-3"
      );

      // Calculate position relative to the active index
      const offset = (index - activeIndex + totalItems) % totalItems;

      if (offset === 0) {
        item.classList.add("active");
      } else if (offset === 1) {
        item.classList.add("next");
      } else if (offset === 2) {
        item.classList.add("far-next");
      } else if (offset === 3) {
        item.classList.add("far-next-2");
      } else if (offset === 4) {
        item.classList.add("far-next-3");
      } else if (offset === totalItems - 1) {
        item.classList.add("previous");
      } else if (offset === totalItems - 2) {
        item.classList.add("far-previous");
      } else if (offset === totalItems - 3) {
        item.classList.add("far-previous-2");
      } else if (offset === totalItems - 4) {
        item.classList.add("far-previous-3");
      }
    });
  }

  function moveCoverflow(direction) {
    activeIndex = (activeIndex + direction + totalItems) % totalItems; // Wrap around using modulo
    updateCoverflow();
  }

  // Add click events to each item
  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      const clickedIndex = index;
      const offset = (clickedIndex - activeIndex + totalItems) % totalItems;

      if (offset > 0 && offset <= Math.floor(totalItems / 2)) {
        moveCoverflow(offset); // Move forward
      } else if (offset > Math.floor(totalItems / 2)) {
        moveCoverflow(offset - totalItems); // Move backward
      }
    });
  });

  // Initialize the coverflow
  updateCoverflow();
});