// script.js

const msfsProjects = [];

function handleButtonClick(action) {
    switch (action) {
        case 'NEXT':
            navigateToNext();
            break;
        case 'PREV':
            navigateToPrev();
            break;
        case 'CLR':
            clearDisplay();
            break;
        case 'DEL':
            deleteLastCharacter();
            break;
        default:
            break;
    }
}

function navigateToNext() {
    // Logic to navigate to next project
    // Update display with current project info
}

function navigateToPrev() {
    // Logic to navigate to previous project
    // Update display with current project info
}

function clearDisplay() {
    // Logic to clear display
}

function deleteLastCharacter() {
    // Logic to delete last character from display
}

function updateDisplay() {
    // Logic to update the display with current project information
}

// Add event listeners for button clicks and keyboard input
window.addEventListener('keydown', function(event) {
    handleButtonClick(event.key);
});
