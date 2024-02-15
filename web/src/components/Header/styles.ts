import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({theme}) => theme.colors.theme};
  height: 80px;
  display: flex;
  padding: 5px;
  justify-content: space-around;

  #company-brand {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 65px;
      transform: scaleX(-1);
    }
  }

  #search-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    gap: 5px;

    input {
      flex-grow: 1;
      height: 40px;
      border: none;
      border-radius: 6px;
      padding-left: 6px;
      outline: none;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    }

    img {
      width: 35px;
    }
  }

  #profile-car {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
      height: 35px;
    }
  }
`