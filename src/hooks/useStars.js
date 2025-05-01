import { useEffect } from 'react';

const useStars = () => {
    useEffect(() => {
        const starsContainer = document.querySelector('.stars');
        const starCount = 200;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            // Random size
            const size = Math.random() * 3;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Random animation duration
            star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);

            starsContainer.appendChild(star);
        }

        // Cleanup function
        return () => {
            if (starsContainer) {
                starsContainer.innerHTML = '';
            }
        };
    }, []); // Empty dependency array means this runs once on mount
};

export default useStars; 