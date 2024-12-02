import React from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;
