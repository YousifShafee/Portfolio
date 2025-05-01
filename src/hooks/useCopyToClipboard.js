import { useEffect } from 'react';

const useCopyToClipboard = () => {
    useEffect(() => {
        const handleCopy = async (event) => {
            const element = event.currentTarget;
            const text = element.textContent;

            try {
                await navigator.clipboard.writeText(text);
                const originalText = element.textContent;
                element.textContent = 'Copied!';

                setTimeout(() => {
                    element.textContent = originalText;
                }, 1500);
            } catch (err) {
                console.error('Failed to copy text:', err);
            }
        };

        const copyableElements = document.querySelectorAll('.copyable');
        copyableElements.forEach(element => {
            element.addEventListener('click', handleCopy);
        });

        // Cleanup function to remove event listeners
        return () => {
            copyableElements.forEach(element => {
                element.removeEventListener('click', handleCopy);
            });
        };
    }, []); // Empty dependency array means this runs once on mount
};

export default useCopyToClipboard; 