// Menu Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');


menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Menandai menu yang aktif
const menuItems = document.querySelectorAll('header nav ul li a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Menghapus class active dari semua item
        menuItems.forEach(i => i.classList.remove('active'));
        // Menambahkan class active pada item yang dipilih
        item.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const skills = [
        { element: document.querySelector('.html'), percentageElement: document.querySelector('.html + .percentage'), value: 90 },
        { element: document.querySelector('.css'), percentageElement: document.querySelector('.css + .percentage'), value: 85 },
        { element: document.querySelector('.javascript'), percentageElement: document.querySelector('.javascript + .percentage'), value: 80 },
        { element: document.querySelector('.react'), percentageElement: document.querySelector('.react + .percentage'), value: 70 },
        { element: document.querySelector('.node'), percentageElement: document.querySelector('.node + .percentage'), value: 75 },
    ];

    skills.forEach(skill => {
        setTimeout(() => {
            skill.element.style.width = `${skill.value}%`; // Mengisi progress bar
            skill.percentageElement.textContent = `${skill.value}%`; // Menambahkan persentase pada teks
        }, 500); // Delay animasi agar lebih dinamis
    });
});
