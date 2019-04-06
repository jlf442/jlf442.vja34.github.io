<script src="js/pageable.js"></script>

<main id=Where to Find Us">
  <section data-anchor="Monday, April 15th">
    11:00am to 08:00pm
    324 S Beaver St, Flagstaff, AZ 86001
  </section>
  <section data-anchor="Tuesday,April 16th">
    11:00am to 06:00pm
    601 N Grand Canyon Blvd, Williams, AZ 86046
  </section>
  <section data-anchor="Thursday,April 18th>
    11:00am to 06:00pm
    3345 Harrison St, Kingman, AZ 86409
  </section>
  <section data-anchor="Friday,April 19th>
    03:00pm to 07:00pm
    403 Diamond Creek Rd, Peach Springs, AZ 86434
  </section>
  <section data-anchor="Saturday,April 20th>
    11:00am to 08:00pm
    3101 Watson Lake Park Rd, Prescott, AZ 86301
  </section>
</main>

new Pageable("#Where to Find Us");

new Pageable("Where to Find Us",{
  pips: true,
  animation: 300,
  delay: 0,
  throttle: 50,
  swipeThreshold: 50,
  orientation: "vertical",
  freeScroll: false,
  navPrevE1: false,
  navNextE1: false,
  infinite: false,
  slideshow: {
    interval: 3000,
    delary: delay
    },
  easing: function easing(t,b,c,d,s) {
    return -c * (t /= d) * (t - 2) + b;
  childSelector: '[data-anchor]',
});

new Pageable("#Where to Find Us",{
  events: {
    wheel: true,
    mouse: true,
    touch: true,
    keydown: true
    }
});

instace.next();
instace.prev();
instace.scrollToPage(index);
instace.scrollToAnchor(anchor);
instace.orientate(orientation);
instace.slideshow().stop();
instace.sliceshow().start();


