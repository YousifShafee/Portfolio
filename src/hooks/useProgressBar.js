import { useEffect } from 'react';

const useProgressBar = () => {
    useEffect(() => {
        const updateProgressBar = () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progressBar = document.getElementById("progressBar");
            if (progressBar) {
                progressBar.style.width = scrolled + "%";
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', updateProgressBar);

        // Initial call to set progress bar
        updateProgressBar();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', updateProgressBar);
        };
    }, []); // Empty dependency array means this runs once on mount
};

export default useProgressBar; 