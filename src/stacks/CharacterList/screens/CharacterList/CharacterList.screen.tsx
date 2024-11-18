import {Button, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {CharacterListStackNavigationProp} from '../../CharacterList.routes';
import CharactersList from '../../../../components/CharactersList';

const CharacterListScreen = () => {
    const {navigate} = useNavigation<CharacterListStackNavigationProp>();

    return (
        <View style={{flex: 1}}>
            <CharactersList/>
            <Button
                title="Navigate to Details screen"
                onPress={(): void => {
                    navigate('CharacterDetailsStack', {
                        screen: 'CharacterDetailsScreen',
                    });
                }}
            />
        </View>
    );
};

export default CharacterListScreen;
