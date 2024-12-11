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

    // Highlight the corresponding tab button (if it exists)
    const tabButton = document.getElementById(`${sectionId}-tab`);
    if (tabButton) {
        tabButton.classList.add('active');
    }
}

function navigateToSection(event, sectionId) {
    event.preventDefault(); // Prevent the default anchor behavior
    showSection(sectionId);

    // Optionally scroll to the section (if desired)
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}