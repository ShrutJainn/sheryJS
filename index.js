const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from(".navLink", {
  stagger: 0.2,
  y: 10,
  opacity: 0,
  duration: 1,
  ease: Power2,
});

Shery.textAnimate("#headings h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 50,
  opacity: 0,
  ease: Expo,
  duration: 1,
  stagger: 0.3,
});

Shery.imageEffect("#imgNtext img", {
  style: 3,
  config: {
    uFrequencyX: { value: 10.74, range: [0, 100] },
    uFrequencyY: { value: 6.61, range: [0, 100] },
    uFrequencyZ: { value: 12.4, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 12.98 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7499999776482589 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.36, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect("#bannerImg", {
  style: 6,
  config: {
    noiseDetail: { value: 7.44, range: [0, 100] },
    distortionAmount: { value: 2.98, range: [0, 10] },
    scale: { value: 36.36, range: [0, 100] },
    speed: { value: 0.45, range: [0, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.2511204469563246 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 30 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  debug: true,
  gooey: true,
});

function videoAnimation() {
  var btn = document.querySelector("button");
  var video = document.querySelector("video");
  btn.addEventListener("mouseenter", () => {
    gsap.to(video, {
      opacity: 1,
      ease: Power4,
    });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(video, {
      opacity: 0,
      ease: Power4,
    });
  });
}
videoAnimation();
