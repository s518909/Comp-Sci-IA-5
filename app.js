// Get all page elements
const pages = document.querySelectorAll('.page');

// Get all navigation links
const navLinks = document.querySelectorAll('#navbar a');

// Highlight thing for each link
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    
    e.preventDefault();

    const targetPage = e.target.getAttribute('href');

    // Loop through all pages and hide them
    pages.forEach(page => {
      page.style.display = 'none';
    });

    // Show the target page
    document.querySelector(targetPage).style.display = 'block';
  });
});

// Show the home page on page load
document.querySelector('#home').style.display = 'block';
