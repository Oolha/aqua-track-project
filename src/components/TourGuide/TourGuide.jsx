import { useState, useEffect } from 'react';
import { useTour } from '@reactour/tour';

const TourGuide = () => {
    const { setIsOpen } = useTour();
    const [isButtonVisible, setIsButtonVisible] = useState(false);


    useEffect(() => {

        const timer = setTimeout(() => {
            setIsButtonVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    
    }, []);

    return (
        <>
            {isButtonVisible && (
                <button
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        backgroundColor: '#9BE1A0',
                        color: '#323F47',
                        border: 'none',
                        borderRadius: '30px',
                        padding: '10px 20px',
                        cursor: 'pointer',
                    }}
                    onClick={() => setIsOpen(true)}
                >
                    Start Tour
                </button>
            )}
        </>
    );
};

export default TourGuide;