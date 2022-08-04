import Container from 'react-bootstrap/Container';
import useIsMobile from '../../hooks/isMobile';
import PersonalAccountRouter from '../../routes/PersonalAccountRouter';

export default function PersonalAccount() {
    const {mobile} = useIsMobile();

    return (
        <main>
            <Container className='account mb-6'>
                <PersonalAccountRouter isMobile={mobile}/>
            </Container>
        </main>
    )
}