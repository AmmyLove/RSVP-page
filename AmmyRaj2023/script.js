window.onload = function() {
    showForm();
  };

document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach((readMoreLink) => {
        readMoreLink.addEventListener("click", (e) => {
            e.preventDefault();
            const paragraph = readMoreLink.parentElement;
            const moreText = paragraph.querySelector(".moreText");
            paragraph.classList.toggle("show-more");
            if (paragraph.classList.contains("show-more")) {
                readMoreLink.innerHTML = "<strong>Read Less...</strong>";
            } else {
                readMoreLink.innerHTML = "<strong>Read More...</strong>";
            }
        });
    });
});




const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
})


