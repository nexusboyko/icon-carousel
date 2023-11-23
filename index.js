const carousel = document.querySelector('.carousel');
const icons = carousel.querySelectorAll('.icon');
const angle_from_center = (2 * Math.PI) / icons.length;
const radius_x = 300; // adjust the horizontal radius
const radius_y = 100; // adjust the vertical radius
const x_offset = -60;
let angle = 0;



/**
 * click and drag icons using cursor
 * (comment this out if you don't want it to be interactive)
 */
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



/**
 * creates auto-rotating icon carousel
 */
setInterval(() => {
  icons.forEach((icon, index) => {
    const x = x_offset + Math.cos(angle + index * angle_from_center) * radius_x;
    const y = Math.sin(angle + index * angle_from_center) * radius_y;
    const z_index = Math.round(y) + radius_y; // calculate z-index based on y position

    // determines blur amount based on z-index
    const blur = (200 - z_index) / 30;

    icon.style.transform = `translate(${x}%, ${y}%)`;
    icon.style.zIndex = z_index;

    /**
     * determines size for icon scaling based on z-index (... + <min. width/height>)
     * (tweak this calculation to get desired icon size)
     */
    const size = z_index/5 + 50;

    /**
     * applies blur effect to icons
     * (icons are blurred the further back they are)
     */
    icon.style.filter = `blur(${blur}px)`; // (comment this out if you don't want blurring)

    /**
     * scales icons to get larger in the foreground and smaller in background
     * (comment this out if you don't want icons to scale)
     */
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