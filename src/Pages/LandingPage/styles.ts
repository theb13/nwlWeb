import styled from 'styled-components';

import landing from '../../images/landing.svg';

export const Container = styled.div`
    
    height:100vh;
    width:100vw;
    /* padding:20px; */

    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
    display:flex;
    align-items:center;
    justify-content: center;

    
    .content-wrapper{
        position: relative;
        
        background: url(${landing}) no-repeat 80% center;

        width:100%;
        max-width:996px;

        height:100%;
        max-height:800px;

        display:flex;
        flex-direction:column;
        align-items: flex-start;
        justify-content: space-between;
        
        >main{
            max-width:350px;
        }
        >main h1{
            font-size:76px;
            font-weight:900;
            line-height:78px;
        }
        >main p{
            margin:40px;
            font-size:24px;
            line-height:34px;
        }
    }

    

    .location{
        position:absolute;
        right:0;
        top: 0;

        font-size:24px;
        line-height:34px;

        display:flex;
        flex-direction:column;
        text-align:end;
    }
    
    .enter-app{
        position:absolute;
        right:0;
        bottom: 0;

        width:65px;
        height:65px;
        border-radius:20px;

        background:#ffd666;

        display:flex;
        align-items:center;
        justify-content:center;

        transition: background-color 0.2s;
        :hover{
            background:#96FEFF;
        }
    }
`;
