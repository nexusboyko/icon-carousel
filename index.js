const carousel = document.querySelector('.carousel');
const icons = carousel.querySelectorAll('.icon');
const angle_from_center = (2 * Math.PI) / icons.length;
const radius_x = 300; // Adjust the horizontal radius
const radius_y = 100; // Adjust the vertical radius
const x_offset = -60;
let angle = 0;

// makes icons draggable with mouse cursor
// (comment out if you don't want it to be interactive)

let is_dragging = false;
let previous_x = 0;

function handleMouseDown(event) {
  is_dragging = true;
  previous_x = event.clientX;
  carousel.style.cursor = 'grabbing';
}

function handleMouseMove(event) {
  if (!is_dragging) return;
  const x_diff = event.clientX - previous_x;
  previous_x = event.clientX;
  angle += x_diff * 0.01;
}

function handleMouseUp() {
  is_dragging = false;
  carousel.style.cursor = 'grab';
}

carousel.addEventListener('mousedown', handleMouseDown);
carousel.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);

// makes a rotating icon carousel

setInterval(() => {
  icons.forEach((icon, index) => {
    const x = x_offset + Math.cos(angle + index * angle_from_center) * radius_x;
    const y = Math.sin(angle + index * angle_from_center) * radius_y;
    const z_index = Math.round(y) + radius_y; // calculate z-index based on y position
    const blur = (200 - z_index) / 30; // calculate blur based on z-index
    const size = z_index/5 + 50; // calculate icon size based on z-index

    // (icons are blurred the further back they are)

    icon.style.transform = `translate(${x}%, ${y}%)`;
    icon.style.zIndex = z_index;
    icon.style.filter = `blur(${blur}px)`;
    
    // scales icons (larger in the foreground, smaller in background) 

    const iconify_icon = icon.querySelector('iconify-icon');
    if (iconify_icon) {
      iconify_icon.width = `${size}px`; // set the width based on size
      iconify_icon.height = `${size}px`; // set the height based on size
    }
  });

  icons.forEach((icon) => icon.classList.remove('active'));
  icons[Math.floor(angle / angle_from_center) % icons.length].classList.add('active');

  angle += 0.01; // adjust the speed of rotation

}, 60); // adjust the interval between frames (milliseconds)