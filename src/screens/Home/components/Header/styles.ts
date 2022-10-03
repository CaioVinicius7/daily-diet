import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 12px 0;

  background-color: ${({ theme }) => theme.colors.gray_100};
`;

export const Logo = styled.Image``;

export const ProfileAvatar = styled.Image`
  width: 48px;
  height: 48px;

  border-radius: 9999px;
  border: 2px solid ${({ theme }) => theme.colors.gray_600};
`;
