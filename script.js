// ==========================
// Main Tab Switching
// ==========================
function switchTab(tabId, linkElement) {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    // Remove active from all sections
    sections.forEach(sec => {
        sec.classList.remove('active');
        sec.style.opacity = 0; // for fade effect
    });

    // Remove active from all nav links
    navLinks.forEach(link => link.classList.remove('active'));

    // Activate selected nav link
    linkElement.classList.add('active');

    // Show clicked section with fade-in
    const activeSection = document.getElementById(tabId);
    activeSection.classList.add('active');
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if(opacity >= 1) clearInterval(fadeIn);
        activeSection.style.opacity = opacity;
        opacity += 0.05;
    }, 20);
}

// ==========================
// Sub-Tab Switching (Complaints Section)
// ==========================
function switchSubTab(subTabId, buttonElement) {
    const subTabs = document.querySelectorAll('.sub-tab');
    const buttons = document.querySelectorAll('.sub-tabs button');

    // Hide all sub-tabs
    subTabs.forEach(tab => {
        tab.classList.remove('active');
        tab.style.opacity = 0; // fade effect
    });

    // Remove active from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Activate clicked button
    buttonElement.classList.add('active');

    // Show selected sub-tab with fade-in
    const activeTab = document.getElementById(subTabId);
    activeTab.classList.add('active');
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if(opacity >= 1) clearInterval(fadeIn);
        activeTab.style.opacity = opacity;
        opacity += 0.05;
    }, 15);
}

// ==========================
// Complaint Form Submission
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('complaintForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const messageBox = document.getElementById('complaintMsg');

            if(name && document.getElementById('complaint').value.trim() !== "") {
                messageBox.innerHTML = Thank you, <b>${name}</b>. Your complaint has been recorded.;
                messageBox.style.color = "#059669";
                this.reset();
            } else {
                messageBox.innerHTML = "Please fill in all fields!";
                messageBox.style.color = "#b91c1c";
            }
        });
    }

    // ==========================
    // Set default main tab and sub-tab
    // ==========================
    const defaultMainLink = document.querySelector('nav a');
    if(defaultMainLink) switchTab(defaultMainLink.getAttribute('onclick').match(/'(\w+)'/)[1], defaultMainLink);

    const defaultSubButton = document.querySelector('.sub-tabs button');
    if(defaultSubButton) switchSubTab(defaultSubButton.getAttribute('onclick').match(/'(\w+)'/)[1], defaultSubButton);
});
