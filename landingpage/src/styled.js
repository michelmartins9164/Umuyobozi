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

export const ContainerBanner = styled.div`
    height: 520px;
    width: 100%;
    background-image: url(https://p4.wallpaperbetter.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    //@media screen and (max-width: ;)
               
`;

export const ButtonBanner = styled.button`
    padding: 15px 80px;
    box-sizing: border-box;
    background-color: #ED6D30;
    border: 1px solid black;
    border-radius: 100px;
    color: white;
    font-family: 'Roboto Mono';
    
   
`;