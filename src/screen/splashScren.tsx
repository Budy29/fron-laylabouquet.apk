import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';
import { LogoApk } from "../asset";
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    const handleCreateAccountPress = () => {
        navigation.navigate('Signup'); // Navigasi ke halaman SignUp
    }

    const handleLoginPress = () => {
        navigation.navigate('Login'); // Navigasi ke halaman Login
    }
    return (
        <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FFFFFF', alignItems: 'center' }}>
            <Text style={Style.title}>Welcome</Text>
            <TouchableOpacity style={Style.btn_CreatAccount} onPress={handleCreateAccountPress}>
                <Text style={Style.title_btn}>Create an Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.btn_login} onPress={handleLoginPress}><Text style={Style.title_btnLogin}>Login</Text></TouchableOpacity>
            <TouchableOpacity><Text style={Style.title_bt}>Login as Admin</Text></TouchableOpacity>
        </View>
    )
};

export default Splash;
const Style = StyleSheet.create({
    title: {
        fontFamily: 'Playfair Display',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: '500',
        lineHeight: 53,
        letterSpacing: 0,
        color: '#000000',
        marginTop: '30%'
    },
    title_btn: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 20,
        color: '#FFFFFF'
    },
    title_btnLogin: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 20,
        color: '#F8C8C8'
    },
    btn_CreatAccount: {
        backgroundColor: '#F8C8C8',
        width: '80%',
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%',
        marginBottom: '5%'
    },
    btn_login: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#F8C8C8',
        borderWidth: 1,
        marginBottom: '5%'
    },
    title_bt: {
        fontFamily: 'Inria Serif',
        fontWeight: '500',
        fontSize: 15,
        color: '#000000'
    },

});
