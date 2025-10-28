document.addEventListener('DOMContentLoaded', function() {
  convertImages('img.injectable');
  mobileMenu();
  accordion();
  smoothScroll();
});

const convertImages = (query, callback) => {
  const images = document.querySelectorAll(query);
  images.forEach(image => {
    fetch(image.src)
      .then(res => res.text())
      .then(data => {
        const parser = new DOMParser();
        const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

        if (!svg) throw new Error('SVG not found');

        if (image.id) svg.id = image.id;
        if (image.className) svg.classList = image.classList;

        image.parentNode.replaceChild(svg, image);
      })
      .then(() => {
        if (typeof callback === 'function') callback();
      })
      .catch(error => console.error(error));
  });
};

function mobileMenu() {
  document.querySelector('.rd-header-mobile').addEventListener('click', function() {
    this.classList.toggle('open');

    document.querySelector('.rd-header-mobile-menu').classList.toggle('open');
    document.querySelector('.rd-header-mobile-top__icon').classList.toggle('open');

    //Attach rd-icon--handler click handlers
    document.querySelectorAll('.rd-icon--handler').forEach(function(icon) {
      icon.addEventListener('click', function(e) {
        e.stopPropagation(); // prevent event bubbling if needed
        e.preventDefault(); // prevent default
        // Find closest ancestor with class 'rd-header-menu-top__link'
        let linkParent = icon.closest('.rd-header-menu-top__link ');
        linkParent.classList.toggle('open');
        
        if (linkParent) {
          // Find the next sibling ul after .rd-header-menu-top__link parent
          let nextUl = linkParent.nextElementSibling;
          if (nextUl && nextUl.tagName.toLowerCase() === 'ul') {
            nextUl.classList.toggle('open');
          }
        }
      });
    });
  });
}

function accordion() {
  document.querySelectorAll('.rd-faq').forEach(main => {
    main.querySelectorAll('.rd-faq-item').forEach(item => {
      const question = item.querySelector('.rd-faq-question');

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.rd-faq-item.open').forEach(openItem => {
          openItem.classList.remove('open');
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    });
    // Open first item by default
    const firstItem = document.querySelector('.rd-faq-item');
    if (firstItem) {
      firstItem.classList.add('open');
    }
  });
}

function smoothScroll(offset = 160) {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

(function ($) {
  $(document).ready(function() {
    const logos = new Swiper('.logos', {
      speed: 1200,
      duration: 5000,
      grabCursor: true,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        840: {
          slidesPerView: 5,
          spaceBetween: 100,
        },
      },
    });
  });
})(jQuery);