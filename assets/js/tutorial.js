const steps = [
    {
        title: "Step 1 — Open your app library",
        text: "Open your Meta app library",
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
        text: "Once the update is complete, launch Nightclub Simulator VR and enjoy the new mode!"
    }
];

let currentStep = 0;

function renderStep() {
    const step = steps[currentStep];
    const container = document.getElementById("step-display");

    let imgHTML = "";
    step.images.forEach(src => {
        imgHTML += `<img src="${src}" class="step-image">`;
    });

    container.innerHTML = `
        <h2>${step.title}</h2>
        <p>${step.text}</p>
        <div class="image-row">${imgHTML}</div>
    `;
}

document.getElementById("nextStep").addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        renderStep();
    }
});

document.getElementById("prevStep").addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        renderStep();
    }
});

renderStep();