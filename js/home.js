

// copyright date
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) copyrightElement.innerText = copyrightElement.innerText.replace(/\d{4}/, currentYear);
}



// Event Listeners
document.addEventListener('DOMContentLoaded', updateCopyrightYear);