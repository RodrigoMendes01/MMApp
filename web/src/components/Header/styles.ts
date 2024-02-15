import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({theme}) => theme.colors.theme};
  height: 80px;
  display: flex;
  justify-content: space-around;
`