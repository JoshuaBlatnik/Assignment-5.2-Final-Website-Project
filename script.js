document.addEventListener('DOMContentLoaded', function() { 
    // Adds an event listener that runs the function when the DOM is fully loaded

    const sections = document.querySelectorAll('section'); 
    // Selects all the section elements and stores them in a NodeList

    const footer = document.querySelector('footer'); 
    // Selects the footer element

    const observer = new IntersectionObserver(entries => { 
        // Creates a new IntersectionObserver instance to observe visibility changes of elements

        entries.forEach(entry => { 
            // Iterates over each entry (element being observed)

            if (entry.isIntersecting) { 
                // Checks if the element is intersecting with the viewport

                entry.target.classList.add('visible'); 
                // Adds the 'visible' class to the element if it is intersecting
            }
        });
    }, {
        threshold: 0.1 
        // Sets the threshold for intersection; element is considered intersecting when 10% visible
    });

    sections.forEach(section => { 
        // Iterates over each section element

        observer.observe(section); 
        // Starts observing the section element
    });

    observer.observe(footer); 
    // Starts observing the footer element
});