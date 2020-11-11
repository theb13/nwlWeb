import styled from 'styled-components';

export const Container = styled.div`
    
    height:100vh;
    width:100vw;

    position:relative;
    display:flex;

    aside{
        height: 100vh;
        width:440px;
        padding: 80px;

        background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);
        
        display:flex;
        flex-direction: column;
        justify-content: space-between;

        h2{
            font-size:40px;
            font-weight:800;
            line-height:42px;
            margin-top:64px;
        }
        
        p{
            line-height:28px;
            margin-top:24px;
        }

        footer{
            display:flex;
            flex-direction:column;
            line-height:24px

            
        }
        footer strong{
            font-weight :800;
        }    
    }

    .leaflet-container{
        z-index:5;
    }
    .create-orphanage{
        position:absolute;
        right:40px;
        bottom: 40px;

        z-index:10;

        width: 64px;
        height: 64px;
        border-radius:20px;

        background:#15c3D6;
        
        display:flex;
        align-items:center;
        justify-content: center;

        transition: background-color 0.2s;

        :hover{
            background:#17d6eb;
        }
    }

    .map-popup .leaflet-popup-content-wrapper{
        background:rgba(255,255,255,0.8);
        border-radius: 20px;
        box-shadow: none;
    }
    .map-popup .leaflet-popup-content{
        color: #0089a5;
        font-size:20px;
        font-weight:bold;
        margin:8px 12px;

        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .map-popup .leaflet-popup-content a{
        width: 40px;
        height: 40px;
        
        background:#15c3D6;
        box-shadow:17.2868px 27.6586px 8441.4884 rgba(23,142,166,0.16);
        border-radius:20px;

        display:flex;
        align-items:center;
        justify-content: center;

    }

    .map-popup .leaflet-popup-tip-container{
        display: none;
    }
`;
