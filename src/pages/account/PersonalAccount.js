import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import PersonalAccountRouter from '../../routes/PersonalAccountRouter';

export default function PersonalAccount() {
    const [mob, setMob] = useState(window.matchMedia("(max-width: 991px)").matches);

    useEffect(() => {
        function updateView() {
            if (window.matchMedia("(max-width: 991px)").matches) {
                setMob(true);
            } else {
                setMob(false);
            }
        }

        window.addEventListener('resize', updateView);
        updateView();
        return () => window.removeEventListener('resize', updateView);
    }, []);

    return (
        <main>
            <Container className='account mb-6'>
                <PersonalAccountRouter isMobile={mob}/>
            </Container>
        </main>
    )
}