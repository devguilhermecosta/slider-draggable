const slider = document.querySelector("#slider");
let isDragging = false;
let scrollLeft;
let pointA;
let distance;


function autoSlide() {
  const sliderWidth = slider.clientWidth;

  // verifica se o slider está no início ou no fim
  if (slider.scrollLeft <= 0 || slider.scrollLeft - (slider.scrollWidth - sliderWidth) > -1) return;

  distance = Math.abs(distance);
  const diference = sliderWidth - distance;

  console.log('scroleft: ', scrollLeft);
  console.log('slider.scrollLeft:', slider.scrollLeft);

  if (slider.scrollLeft > scrollLeft) {
    slider.scrollLeft += distance > sliderWidth / 3 ? diference : -distance;
    return
  }

  slider.scrollLeft -= distance > sliderWidth / 3 ? diference : -distance;
}


function handleStart(e) {
  e.preventDefault();

  isDragging = true;
  pointA = e.pageX || e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
  slider.classList.add('is_dragging');
}


function handleMove(e) {
  e.preventDefault();

  if (!isDragging) return;

  const pointB = e.pageX || e.touches[0].pageX;
  distance = pointB - pointA;
  slider.scrollLeft = scrollLeft - distance;
}


function handleEnd() {
  
  if (!isDragging) return;
  
  slider.classList.remove('is_dragging');
  autoSlide();
  isDragging = false;
}


slider.addEventListener("mousedown", handleStart);
slider.addEventListener("touchstart", handleStart);

slider.addEventListener("mousemove", handleMove);
slider.addEventListener("touchmove", handleMove);

slider.addEventListener("mouseup", handleEnd);
slider.addEventListener("mouseleave", handleEnd);
slider.addEventListener("touchend", handleEnd);
