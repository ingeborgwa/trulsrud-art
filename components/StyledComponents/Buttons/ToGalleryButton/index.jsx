import styled from 'styled-components';
import { useRouter } from 'next/router';

export const ToGalleryButton = () => {
    const router = useRouter();

    return(
        <ToGalleryButtonStyle  onClick={() => router.push('/gallery')}>Les mer her</ToGalleryButtonStyle >
    )
};


export const ToGalleryButtonStyle = styled.button `
    font-size: 0.85rem;
    background-color: #717e79;
    color: white;
    border-radius: 10px;
    padding: 0.5em;
    cursor: pointer;
`;