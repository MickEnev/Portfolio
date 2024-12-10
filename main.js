document.addEventListener('DOMContentLoaded', () => {
    const resumeButton = document.querySelector('.get-resume');
    if (resumeButton) {
        resumeButton.addEventListener('click', function () {
            this.blur();
        });
    }
});
