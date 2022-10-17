import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: linear-gradient(107.26deg, #9F42D8 1.49%, #38F78F 87.32%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //padding: 0px;
`;


export const Options = styled.div`
    width: 90%;
    height: 90%;
    background: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    gap: 20px;

    div.two-cards{
        display: flex;
        gap: 40px;
        width: fit-content;
    }
`;


export const Card = styled.div`
    background: #FFFFFF;
    border: 0.1px solid #B5B3B3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    width: 116px;
    height: 110px;
    padding: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-size: 18px;
    }
    cursor: pointer;
`;

export const BigCard = styled.div`
    border: 0.1px solid #B5B3B3;
    background: #FFFFFF;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    width: 286px;
    height: fit-content;
    padding: 10px;
    cursor: pointer;

    div.respostas{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div.null{
        height: 150px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Title = styled.h1`
    width: 100%;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    /* identical to box height */


    color: #0B194A;
`;


export const LineAnswers = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid transparent;
    border-radius: 0px 15px 15px 0px;
    transition: opacity 0.4s; 


    button{
        background: #35ED88;
        border: 0.146667px solid #000000;
        border-radius: 15px;
        border: none; 

        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 19px;
        display: flex;
        align-items: center;

        color: #FFFFFF;

        padding: 5px 12px;
        cursor: pointer;

        transition: opacity 0.4s;  
        :hover{
            background: #1FBA65;
        } 
    }
    :hover{
        background:  rgba(183, 183, 183, 0.46);
    } 
`;