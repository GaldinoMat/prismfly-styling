const homePageContent = [
  {
    location: "Spain",
    title: "Discover Spain: tapestry of culture",
    description:
      "Embark on a journey through Spain with our expertly curated tours. Explore iconic landmarks, savor authentic cuisine, and immerse yourself in the rich tapestry of Spanish culture. Let us guide you through an adventure where every moment is filled with discovery and delight.",
    image: "../assets/photo.png",
    alt: "A photo of a spanish beach",
  },
  {
    location: "Egypt",
    title: "An odyssey through ancient wonders",
    description:
      "From the iconic pyramids of Giza to the serene banks of the Nile, our itineraries promise an immersive experience into the heart of ancient civilization. Explore captivating temples, cruise along the timeless river, and delve into the mysteries of pharaonic history. Let us lead you on a remarkable adventure where every step reveals the magic of Egypt's past and present.",
    image: "../assets/photo-1.png",
    alt: "A photo of a egyptian pyramid",
  },
  {
    location: "Portugal",
    title: "Madeira: exploring nature's paradise",
    description:
      "Embark on a captivating journey to Madeira, where lush landscapes and pristine beauty await. Our thoughtfully designed tours invite you to discover the island's natural wonders, from rugged coastlines to verdant forests. Immerse yourself in the charming villages, indulge in local delicacies, and breathe in the fresh ocean air as you explore this enchanting destination.",
    image: "../assets/photo-2.png",
    alt: "A photo of the portuguese mountainside",
  },
];

function createHomePageSliderItem(item, index) {
  return `
      <div class="home-page-slider-item ${index % 2 !== 0 ? "reverse" : ""} ${index === 1 ? "no-button" : ""}">
        <div class="home-page-slider-item-image">
          <img src="assets/${item.image}" alt="${item.alt}">
        </div>
        <div class="home-page-slider-item-content">
          <h3>${item.location}</h3>
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
        ${
          index !== 1
            ? `<div class="home-page-slider-item-button">
                    <button>
                        Learn More
                    </button>
                </div>`
            : ""
        }
      </div>
      `;
}

function buildHomePageSliderContent(homePageSlider) {
  homePageSlider.innerHTML = homePageContent
    .map((item, index) => {
      return createHomePageSliderItem(item, index);
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const homePageSlider = document.querySelector(".home-page-slider");

  if (homePageSlider) {
    buildHomePageSliderContent(homePageSlider);

    $(".home-page-slider").slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "homepage-slick-dots",
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768,
          settings: "unslick",
        },
      ],
    });
  }
});
