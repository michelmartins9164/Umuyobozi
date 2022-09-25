import styled from 'styled-components';
export const ContainerNavBar = styled.nav`
    background-color: #272727;
    width: 100%;
    height: 70px;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    ol {
        @media screen and (max-width:475px) {
            justify-content: center;
        }
        display: flex;
        justify-content: end;
        align-items: center;
        column-gap: 1rem;

        width: 100%;

        p {
            font-size: 20px;
            color: white;
            position: relative;
        
        }
        
    }
    `;

export const Offers = styled.div`
    display: flex;
    align-items: center;
    p {
        background-color: #EA6121;
        padding: .8rem;
        border-radius: 5px;
    }
    &::before {
        margin-right: 20px;
        content: " ";
        width: 3px;
        height: 40px;
        background-color: #EA6121;
        display: flex;
        color: #ddd;
        font-weight: bold;
    }
            `;