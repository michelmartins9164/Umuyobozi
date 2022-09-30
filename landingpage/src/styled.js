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
    height: 250px;
    width: 100%;
    background-image: url(https://p4.wallpaperbetter.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and ( min-width: 830px){
        height: 400px;
    }
    @media screen and ( min-width: 1300px){
        height: 560px;
    }
    
`;

export const ButtonBanner = styled.button`
    height: 30px;  
    width: 200px;
    margin-top: 160px;
    box-sizing: border-box;
    background-color: #ED6D30;
    border: 1px solid black;
    border-radius: 100px;
    color: white;
    font-family: 'Roboto Mono';
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        color: white;
    }
    font-size: 0,9rem;
    @media screen and (min-width: 830px) {
        height: 35px;
        margin-top: 300px;
        width: 240px;
        font-size: 1rem;
    }
    @media screen and (min-width: 1300px) {
        height: 40px;
        margin-top: 430px;
        width: 260px;
        font-size: 1rem;
    }
    img{
        margin-right: 10px;
        margin-top: 5px;
        height: 20px;
        width: 20px;
    }
`;

export const Slide = styled.div`
    width: 90%;
    margin: 0 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 1em;
    margin-bottom: 10em;
    
    div {
        width: 80%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            
        }
    }
`;
