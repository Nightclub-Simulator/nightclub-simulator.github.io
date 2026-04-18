const steps = [
    {
        title: "Step 1 — Open your app library",
        text: "Open your Meta app library and find the game",
        images: ["../assets/decals/example1.png"]
    },
    {
        title: "Step 2 — Press the button with the 3 dots",
        text: "Hover over Nightclub Simulator VR, and press the button with the 3 dots to open the menu, and then press settings.",
        images: ["../assets/decals/example2.png"]
    },
    {
        title: "Step 3 — Change the release channel",
        text: "Press the button named 'Release Channels'. Change your release channel to 'April Test 01 (Opt-in)' and then press the 'Confirm' button to save your changes.",
        images: ["../assets/decals/example3.png", "../assets/decals/example4.png"]
    },
    {
        title: "Step 4 — Update your game",
        text: "Go back to your library, and press the 'Update' button on Nightclub Simulator VR to download the latest test version. If there is no 'Update' button, reinstall your game.",
        images: ["../assets/decals/example5.png", "../assets/decals/example6.png"]
    },
    {
        title: "Step 5 — Launch the game",
        text: "Once the update is complete, launch Nightclub Simulator VR and enjoy testing the new mode!"
    }
];

let currentStep = 0;

function preloadImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function renderStep() {
    const step = steps[currentStep];
    const container = document.getElementById("step-display");

    let imgHTML = "";
    if (step.images) {
        step.images.forEach(src => {
            imgHTML += `<img src="${src}" class="step-image" loading="lazy" onclick="openImageModal('${src}')">`;
        });
    }

    container.innerHTML = `
        <h2>${step.title}</h2>
        <p>${step.text}</p>
        <div class="image-row">${imgHTML}</div>
    `;

    // Preload next step's images
    if (currentStep < steps.length - 1 && steps[currentStep + 1].images) {
        preloadImages(steps[currentStep + 1].images);
    }
}

function animateStepTransition(newStepIndex) {
    const container = document.getElementById("step-display");
    container.classList.add('fade-out');

    setTimeout(() => {
        currentStep = newStepIndex;
        renderStep();
        container.classList.remove('fade-out');
        container.classList.add('fade-in');
        setTimeout(() => {
            container.classList.remove('fade-in');
        }, 500);
    }, 300);
}

document.getElementById("nextStep").addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        animateStepTransition(currentStep + 1);
    }
});

document.getElementById("prevStep").addEventListener("click", () => {
    if (currentStep > 0) {
        animateStepTransition(currentStep - 1);
    }
});

renderStep();

// Image zoom modal functionality
function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const zoomedImage = document.getElementById('zoomedImage');
    
    zoomedImage.src = src;
    modal.classList.add('active');
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
}

// Close modal when clicking the X
document.addEventListener('DOMContentLoaded', function() {
    const modalClose = document.querySelector('.image-modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeImageModal);
    }
    
    // Close modal when clicking outside the image
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('click', function(event) {
            if (event.target === imageModal) {
                closeImageModal();
            }
        });
    }

    // Video Modal functionality
    const videoModal = document.getElementById('videoModal');
    const watchVideoBtn = document.getElementById('watchVideoBtn');
    const videoModalClose = document.querySelector('.video-modal-close');

    if (watchVideoBtn && videoModal) {
        // Open video modal when button is clicked
        watchVideoBtn.addEventListener('click', function() {
            videoModal.classList.add('active');
        });

        // Close video modal when X is clicked
        if (videoModalClose) {
            videoModalClose.addEventListener('click', function() {
                videoModal.classList.remove('active');
            });
        }

        // Close video modal when clicking outside the video
        videoModal.addEventListener('click', function(event) {
            if (event.target === videoModal) {
                videoModal.classList.remove('active');
            }
        });
    }

    // FAQ Modal functionality
    const faqModal = document.getElementById('faqModal');
    const infoBtn = document.getElementById('infoBtn');
    const faqModalClose = document.querySelector('.faq-modal-close');

    if (infoBtn && faqModal) {
        // Open FAQ modal when info button is clicked
        infoBtn.addEventListener('click', function() {
            faqModal.classList.add('active');
        });

        // Close FAQ modal when X is clicked
        if (faqModalClose) {
            faqModalClose.addEventListener('click', function() {
                faqModal.classList.remove('active');
            });
        }

        // Close FAQ modal when clicking outside the content
        faqModal.addEventListener('click', function(event) {
            if (event.target === faqModal) {
                faqModal.classList.remove('active');
            }
        });
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
        // Also close video modal if open
        const videoModal = document.getElementById('videoModal');
        if (videoModal) {
            videoModal.classList.remove('active');
        }
        // Also close FAQ modal if open
        const faqModal = document.getElementById('faqModal');
        if (faqModal) {
            faqModal.classList.remove('active');
        }
    }
});