// Show information based on the clicked list item
function toggleInfo(infoId) {
    // Hide all info elements
    document.querySelectorAll('.info').forEach(el => el.style.display = 'none');

    // Show the selected info element
    const infoElement = document.getElementById(infoId);
    infoElement.style.display = 'block'; // Directly show the clicked info

    // Reset the colors of all image parts (so only one can be active at a time)
    resetImageParts();

    // Map infoId to related image part class and corresponding HTML element ID
    const partMap = {
        'Roof-info': { elementId: 'roof', className: 'roof-active' },
        'Windows-info': { elementId: 'window', className: 'window-active' },
        'MainDoor-info': { elementId: 'maindoor', className: 'MainDoor-active' },
        'DoorPath-info': { elementId: 'doorpath', className: 'DoorPath-active' },
        'GarageRoof-info': { elementId: 'garage-roof', className: 'GarageRoof-active' },
        'GarageDoor-info': { elementId: 'garage-door', className: 'GarageDoor-active' },
        'GaragePath-info': { elementId: 'garage-path', className: 'GaragePath-active' },
        'Lawn-info': { elementId: 'lawn', className: 'Lawn-active' },
        'Fence-info': { elementId: 'fence', className: 'Fence-active' }
    };

    // Activate the related image part
    const part = partMap[infoId];
    if (part) {
        const element = document.getElementById(part.elementId);
        if (element) element.classList.add(part.className);
    }
}

function resetImageParts() {
    document.querySelectorAll('.roof-active, .window-active, .MainDoor-active, .DoorPath-active, .GarageRoof-active, .GarageDoor-active, .GaragePath-active, .Lawn-active, .Fence-active')
        .forEach(el => el.classList.remove(
            'roof-active', 'window-active', 'MainDoor-active', 'DoorPath-active',
            'GarageRoof-active', 'GarageDoor-active', 'GaragePath-active',
            'Lawn-active', 'Fence-active'
        ));
}

// Add event listeners for house parts
document.getElementById('roof').addEventListener('click', function() {
    toggleInfo('Roof-info');
});

document.getElementById('window').addEventListener('click', function() {
    toggleInfo('Windows-info');
});

document.getElementById('maindoor').addEventListener('click', function() {
    toggleInfo('MainDoor-info');
});

document.getElementById('doorpath').addEventListener('click', function() {
    toggleInfo('DoorPath-info');
});

document.getElementById('garage-roof').addEventListener('click', function() {
    toggleInfo('GarageRoof-info');
});

document.getElementById('garage-door').addEventListener('click', function() {
    toggleInfo('GarageDoor-info');
});

document.getElementById('garage-path').addEventListener('click', function() {
    toggleInfo('GaragePath-info');
});

document.getElementById('lawn').addEventListener('click', function() {
    toggleInfo('Lawn-info');
});

document.getElementById('fence').addEventListener('click', function() {
    toggleInfo('Fence-info');
});