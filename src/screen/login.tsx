import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';
import { LogoApk, LogoLog, Eye, EyeLock } from "../asset";
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';


const App = () => {
    const navigation = useNavigation();
    const handleCreateAccountPress = () => {
        navigation.navigate('Signup');
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLoginPress = () => {
        if (email === "layla@gmail.com" && password === "password123") {
            navigation.navigate('Home');
        } else {
            Alert.alert("email dan password salah");
        }
    }

    const [inputFocused, setInputFocused] = useState(false);
    const handleInputFocus = () => {
        setInputFocused(true);
    }
    const handleInputBlur = () => {
        setInputFocused(false);
    }
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FFFFFF', }}>
            <View style={{ alignItems: 'center' }}>
                <LogoLog style={{ marginBottom: '15%' }} />
                <LogoApk />
            </View>
            <View style={Style.container}>
                <TextInput placeholder="Email" style={[Style.input, inputFocused && { transform: [{ translateY: -30 }] }]} onFocus={handleInputFocus}
                    onBlur={handleInputBlur} onChangeText={(text) => setEmail(text)} />
                <TextInput placeholder="Pasword" style={[Style.input, inputFocused && { transform: [{ translateY: -80 }] }]} onFocus={handleInputFocus}
                    onBlur={handleInputBlur} secureTextEntry={!showPassword} onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity onPress={togglePasswordVisibility} style={[Style.ey, inputFocused && { transform: [{ translateY: -86 }] }]} onFocus={handleInputFocus}
                    onBlur={handleInputBlur} >
                    {showPassword ? (
                        <Eye />
                    ) : (
                        <EyeLock />
                    )}
                </TouchableOpacity>
                <View style={Style.containerBox}>
                    <CheckBox />
                    <Text>Remember Me</Text>
                </View>
                <TouchableOpacity style={Style.btn_login} onPress={handleLoginPress}><Text style={Style.title_btn}>Login</Text></TouchableOpacity>
                <View style={Style.btn_CreatAccount}>
                    <Text>Don't have an Account ?</Text>
                    <TouchableOpacity style={{ left: 5 }} onPress={handleCreateAccountPress}><Text style={Style.btntitleLog}>Sign up</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default App;
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
        fontFamily: 'Inria Serif',
        fontWeight: '400',
        fontSize: 18,
        color: '#000000'
    },
    title_btnLogin: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 20,
        color: '#F8C8C8'
    },
    btn_CreatAccount: {
        marginBottom: '5%',
        flexDirection: 'row'
    },
    btn_login: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: 46,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#F8C8C8',
        borderWidth: 1,
        marginBottom: '5%',
        marginTop: '15%'
    },
    title_bt: {
        fontFamily: 'Inria Serif',
        fontWeight: '500',
        fontSize: 15,
        color: '#000000'
    },
    container: {
        backgroundColor: '#F8C8C8',
        width: '100%',
        height: '50%',
        marginTop: '25%',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        borderColor: '#000000',
        borderBottomWidth: 1,
        width: '80%',
        padding: 0,
        marginTop: '17%'
    },
    containerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%', marginLeft: '-55%'

    },
    btntitleLog: {
        color: '#202660'
    },
    ey: {
        position: 'relative', top: '-6%', left: '37%',
    }

});
