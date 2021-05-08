import { useRouter } from 'next/router';
import styled from 'styled-components';


const BackButton = () => {
    const router = useRouter();

    return(
        <BackButtonStyle onClick={() => router.back()}>Tilbake</BackButtonStyle>
    )
};

export default BackButton;

export const BackButtonStyle = styled.button`
    padding:0.5em;
    margin: 0.5em;
    font-size: 0.8rem;
    background-color: #357266;
    color: #fff;
    border-radius: 5px;

    &:hover {
        background-color: #fff;
        border-color: #357266;
        color: #357266;
    }

`;