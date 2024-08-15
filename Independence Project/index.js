document.querySelectorAll('.balloon').forEach(balloon => {
    
    balloon.style.left = Math.random() * window.innerWidth + 'px';

    
    balloon.style.animationDuration = (5 + Math.random() * 5) + 's';
});
