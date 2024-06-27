import styled from "styled-components";

export const MapCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 50px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 30px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 100px;
  margin: 0px;
  padding-bottom: 50px;
`;

export const Name = styled.h3`
  text-align: center;
  font-size: auto;
`;

export const Body = styled.div`
  background-color: whitesmoke;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 8px;
`;
