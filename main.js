document.addEventListener('DOMContentLoaded', () => {
    const resumeButton = document.querySelector('.get-resume');
    if (resumeButton) {
        resumeButton.addEventListener('click', function () {
            this.blur();
        });
    }
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.tab-content').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-buttons button').forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Highlight the selected button
    document.getElementById(`${sectionId}-tab`).classList.add('active');
}