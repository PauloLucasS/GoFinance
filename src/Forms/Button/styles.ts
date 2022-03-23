import styled from "styled-components/native"
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
width: 100%;
background-color: ${({ theme }) => theme.colors.secondary};

border-radius: 5px;
padding: 18px;
align-items: center;

margin-top: 8px;
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
font-size: ${RFValue(14)}px;

color: ${({ theme }) => theme.colors.shape}


`;
