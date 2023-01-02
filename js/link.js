document.getElementById('about').addEventListener('click', function(event){
    event.preventDefault()
    const textSection = document.getElementById('text-section');
    textSection.scrollIntoView({ behavior: 'smooth' });
    
})
document.getElementById('course').addEventListener('click', function(event){
    event.preventDefault()
    const textSection = document.getElementById('course-section');
    textSection.scrollIntoView({ behavior: 'smooth' });
    
})
document.getElementById('contact').addEventListener('click', function(event){
    event.preventDefault()
    const textSection = document.getElementById('contact-form');
    textSection.scrollIntoView({ behavior: 'smooth' });
    
})
document.getElementById('home').addEventListener('click', function(event){
    event.preventDefault()
    const textSection = document.getElementById('home-section');
    textSection.scrollIntoView({ behavior: 'smooth' });
    
})
document.getElementById('trainer').addEventListener('click', function(event){
    event.preventDefault()
    const textSection = document.getElementById('trainer-section');
    textSection.scrollIntoView({ behavior: 'smooth' });
    
})