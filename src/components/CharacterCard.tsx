import React from 'react';
import {Character} from '../interfaces/characterInterface';
import styled from 'styled-components/native';
import {Dimensions, View} from 'react-native';
import {theme} from '../configs/constants';


const CharacterCard = ({name, image, status, species}: Character) => {

    return (
        <MainWrapper>
            <MainContent>
                <View>
                    <Section>
                        <SectionTitle first>Name</SectionTitle>
                        <SectionValue>{name || '-'}</SectionValue>
                        <SectionTitle>Status</SectionTitle>
                        <SectionValue>{status || '-'}</SectionValue>
                        <SectionTitle>Species</SectionTitle>
                        <SectionValue>{species || '-'}</SectionValue>
                    </Section>
                </View>
                <CharacterImage source={{uri: image}}/>
            </MainContent>
        </MainWrapper>
    );
};


const MainWrapper = styled.View`
  border-radius: 24px;
  padding: 20px;
  border-width: 1px;
  border-color: ${theme.colors.primaryGreen};
  background-color: ${theme.colors.white};
  width: ${Dimensions.get('screen').width - 20};
`;
const MainContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const CharacterImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 24px;
  border-width: 1px;
  border-color: ${theme.colors.primaryGreen};
`;
const Section = styled.View``;

const SectionTitle = styled.Text<{ first?: boolean }>`
  font-size: 12px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.mediumGreen};
  text-transform: uppercase;
  margin-top: ${p => p.first ? '0px' : '20px'};
  flex-wrap: wrap;
`;
const SectionValue = styled(SectionTitle)`
  font-size: 16px;
  font-family: ${theme.fonts.interBase};
  margin-top: 3px;
`;
export default CharacterCard;
