document.addEventListener('DOMContentLoaded', function() {
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.contenido-seccion');
        const navLinks = document.querySelectorAll('.nav-link');
        const additionalBtns = document.querySelectorAll('.additional-btn');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        const mobileAdditionalBtns = document.querySelectorAll('.mobile-additional-btn');

        sections.forEach(section => {
            section.classList.remove('activa');
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('activa');
            const derechaScrollable = document.querySelector('.derecha-scrollable');
            if (derechaScrollable) {
                derechaScrollable.scrollTop = 0;
            }
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-seccion') === sectionId) {
                link.classList.add('active');
            }
        });

        additionalBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-seccion') === sectionId) {
                btn.classList.add('active');
            }
        });

        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-seccion') === sectionId) {
                link.classList.add('active');
            }
        });

        mobileAdditionalBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-seccion') === sectionId) {
                btn.classList.add('active');
            }
        });
    }

    const donaMenu = document.getElementById('donaMenu');
    const donaFixed = document.getElementById('donaFixed');
    const backToHome = document.getElementById('backToHome');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const body = document.body;

    function openMobileMenu() {
        donaMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        mobileMenuContainer.classList.add('active');
        body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        donaMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        mobileMenuContainer.classList.remove('active');
        body.classList.remove('menu-open');
        document.body.style.overflow = 'auto';
    }

    function exitFullscreenMode() {
        closeMobileMenu();
        showSection('personal_profile');
    }

    donaMenu.addEventListener('click', openMobileMenu);
    donaFixed.addEventListener('click', openMobileMenu);
    backToHome.addEventListener('click', exitFullscreenMode);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    mobileCloseBtn.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('[data-seccion]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-seccion');
            showSection(sectionId);

            if (this.closest('.mobile-menu-container')) {
                mobileMenuOverlay.classList.remove('active');
                mobileMenuContainer.classList.remove('active');
            }
        });
    });

    showSection('personal_profile');

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (body.classList.contains('menu-open')) {
                closeMobileMenu();
            }
        }
    });

    document.addEventListener('click', function(e) {
        if (body.classList.contains('menu-open') &&
            !e.target.closest('.mobile-menu-container') &&
            !e.target.closest('.dona-menu') &&
            !e.target.closest('.dona-fixed') &&
            !e.target.closest('.back-to-home') &&
            !e.target.closest('.mobile-menu-overlay')) {
            closeMobileMenu();
        }
    });
});