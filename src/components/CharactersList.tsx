import {ActivityIndicator, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getAllCharactersAsync} from '../services/charactersService';
import {useAppSelector} from '../configs/store';
import {selectCharacters} from '../features/characters/charactersSlice';
import CharacterCard from './CharacterCard';
import styled from 'styled-components/native';
import {theme} from '../configs/constants';
import Layout from './common/Layout';


const CharactersList = () => {
    const charactersArray = useAppSelector(selectCharacters);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        dispatch(getAllCharactersAsync({page})).then((characters) => {
            setLoading(false);
        });
    }, [dispatch]);

    const loadMore = () => {
        if (!loading) {
            setLoading(true);
            dispatch(getAllCharactersAsync({page: page + 1})).then(() => {
                setLoading(false);
                setPage(prevPage => prevPage + 1);
            });
        }
    };

    const renderFooter = () => {
        return loading ? <ActivityIndicator size="large" color="#0000ff"/> : null;
    };
    console.log(charactersArray);
    return (
        <Layout>
            <PageHeader>Characters</PageHeader>
            <FlatList
                contentContainerStyle={{alignItems: 'center'}}
                keyExtractor={item => item.id.toString()}
                data={charactersArray}
                renderItem={({item, index}) => (
                    <CharacterCard {...item} key={index.toString()}/>
                )}
                onEndReached={loadMore}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.9}
                ListFooterComponent={renderFooter}
                ItemSeparatorComponent={() => <View style={{height: 20}}/>}
            />
        </Layout>

    );
};

const PageHeader = styled.Text`
  color: ${theme.colors.darkGreen};
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 20px;
`;

export default CharactersList;
