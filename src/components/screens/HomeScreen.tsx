import React from 'react';
import { Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <>
            <Button
                title="Go to Profile Page"
                onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
            />
            <Button
                title="Todo Page"
                onPress={() => navigation.navigate('Todo')}
            />
        </>
    );
};

export default HomeScreen;
