import {Button, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {CharacterListStackNavigationProp} from '../../CharacterList.routes';
import {getAllCharactersAsync} from '../../../../services/charactersService';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../../configs/store';
import {selectCharacters} from '../../../../features/characters/charactersSlice';

const CharacterListScreen = () => {
    const {navigate} = useNavigation<CharacterListStackNavigationProp>();
    const charactersArray = useAppSelector(selectCharacters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCharactersAsync());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <Text>Implement CharactersListScreen</Text>
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
