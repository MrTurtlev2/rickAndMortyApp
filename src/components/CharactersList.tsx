import {ActivityIndicator, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getAllCharactersAsync} from '../services/charactersService';
import {useAppSelector} from '../configs/store';
import {selectCharacters} from '../features/characters/charactersSlice';


const CharactersList = () => {
    const charactersArray = useAppSelector(selectCharacters);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
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
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={charactersArray}
            renderItem={({item, index}) => (
                <Text key={index.toString()} style={{height: 100, width: '100%'}}>
                    {JSON.stringify(item.id)}
                </Text>
            )}
            onEndReached={loadMore}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.9}
            ListFooterComponent={renderFooter}
        />
    );
};
export default CharactersList;
