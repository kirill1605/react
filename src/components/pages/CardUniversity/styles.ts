import styled from 'styled-components';

export const Card = styled.div`
    max-width: 300px;
    border-radius: 5px;
    padding: 20px;
    align-items: center;
    background-color: #FFF;
    transition: opacity .3s ease, transform .3s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
        opacity: .7;
    }

    > h1 {
        grid-column: span 2;
        font-weight: bold;
        color: #333;
        font-size: 24px;
        margin-bottom: 10px;
    }

    > span {
        font-style: italic;
        color: #777;
        font-size: 18px;
        background: transparent;
    }
`;