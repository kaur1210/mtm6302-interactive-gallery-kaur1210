// Get the gallery, overlay, large image, and caption elements
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const largeImage = document.getElementById('largeImage');
const caption = document.getElementById('caption');

// Array containing image data
const imageData = [
    { src: 'IMG/d1.jpg', alt: 'Image 1', caption: 'Cup of Canada' },
    { src: 'IMG/d2.jpg', alt: 'Image 2', caption: 'street of downtown' },
    { src: 'IMG/d3.jpg', alt: 'Image 3', caption: 'Niagra Falls' },
    { src: 'IMG/d4.jpg', alt: 'Image 4', caption: 'sky view of toronto ' },
    { src: 'IMG/d5.jpg', alt: 'Image 5', caption: 'alberta lake' },
    { src: 'IMG/d6.jpg', alt: 'Image 6', caption: 'Boat on Lake' },
    { src: 'IMG/d7.jpg', alt: 'Image 7', caption: 'night view toronto' },
    { src: 'IMG/d8.jpg', alt: 'Image 8', caption: 'sunset' },
    { src: 'IMG/d9.jpg', alt: 'Image 9', caption: 'lake louise' },
    { src: 'IMG/d10.jpg', alt: 'Image 10', caption: 'cottage on lake' },
    { src: 'IMG/d11.jpg', alt: 'Image 11', caption: 'canada bridge' },
    { src: 'IMG/d12.jpg', alt: 'Image 12', caption: 'parliament of canada' }
];

// Function to add images to the gallery
imageData.forEach((imgData, index) => {
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.alt;
    img.setAttribute('data-index', index); // Store index in a custom data attribute
    gallery.appendChild(img);
});

// Event listener for gallery clicks
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = event.target.getAttribute('data-index');
        showOverlay(index);
    }
});

// Function to show overlay with large image and caption
function showOverlay(index) {
    const imgData = imageData[index];
    largeImage.src = imgData.src;
    caption.textContent = imgData.caption;
    overlay.style.display = 'flex';

    // Event listener to hide overlay when clicking on the large image
    largeImage.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
}
