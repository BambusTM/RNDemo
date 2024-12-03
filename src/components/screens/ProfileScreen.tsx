import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.RowContainer}>
                <Image style={styles.logo} source={require('../../assets/cat.jpg')} />
                <Image style={styles.logo} source={require('../../assets/woman.png')} />
            </SafeAreaView>
            <SafeAreaView style={styles.ColContainer}>
                <Text style={styles.text}>
                    This is {route.params.name}'s profile
                </Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    RowContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    ColContainer: {
        flex: 1,
        textAlign: 'auto',
        alignItems: 'center',
    },
    logo: {
        width: '50%',
        height: 150,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});
