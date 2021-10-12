const ScrollAnimations = () => {
  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".slide-in");

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px",
  };
  const appearOnScroll = new IntersectionObserver(function (
    enteries,
    appearOnScroll
  ) {
    enteries.forEach((entery) => {
      if (!entery.isIntersecting) {
        entery.target.classList.remove("appear");
        return;
      } else {
        entery.target.classList.add("appear");
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });
};

export default ScrollAnimations;
