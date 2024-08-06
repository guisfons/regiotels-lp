window.addEventListener('load', function() {
    gsap.registerPlugin(ScrollTrigger)

    const sections = document.querySelectorAll('main section')

    sections.forEach(section => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse'
                }
            }
        )
    })
})