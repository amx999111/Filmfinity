let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // scrolling down
    document.getElementById("header").classList.add("hidden");
  } else {
    // scrolling up
    if (currentScrollTop < lastScrollTop) {
      document.getElementById("header").classList.remove("hidden");
    }
  }

  lastScrollTop = currentScrollTop;
});

const dropdowns = document.querySelectorAll('.title-div');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    const dropdownContent = dropdown.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });
});

