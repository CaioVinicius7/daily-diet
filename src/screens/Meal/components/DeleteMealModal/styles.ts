import styled, { css } from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.25);
`;

export const ModalContent = styled.View`
  margin: 0 32px;
  padding: 15px 25px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray_100};

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const ModalText = styled.Text`
  margin: 15px 0;
  width: 100%;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font_size.XL}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_600};
  `}
`;
