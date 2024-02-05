import styled from "styled-components";
import { Link } from "react-router-dom";

export const AdminPanelWrapper = styled.div`
  position: relative;
  // background-color: #4689f3;
  // background-image: linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%);
  background-image: linear-gradient(-40deg, #b721ff 0%, #21d4fd 100%);
  padding: 50px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  @media (width <= 768px) {
    padding: 30px 10px;
  }
`;

export const AdminTitle = styled.h1`
  position: relative;
  color: #f7fff7;
  margin-bottom: 40px;
  @media (width <= 768px) {
    padding-top: 10px;
    margin-bottom: 10px;
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    padding: 1px;
    left: 0;
    bottom: 0;
    background-color: #f7fff7;
  }
`;

export const UserList = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (width <= 768px) {
    margin-top: 10px;
  }
`;

export const ViewForm = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  padding: 5px 10px;
  outline: unset;
  border: unset;
  border-radius: 3px;
  background-color: #ad2dff;
  color: #f1f1f1;
  transition: all 0.3s ease;
  letter-spacing: 0.7px;

  &:hover,
  &:focus {
    background-color: #6fae63;
    transform: translateY(3px);
  }
`;
