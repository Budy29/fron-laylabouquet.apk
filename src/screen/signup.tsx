import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    TextInput,
    Alert

} from 'react-native';
import { LogoApk, LogoSign } from "../asset";
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';


const App = () => {
    const navigation = useNavigation();
    const handleLoginPress = () => {
        navigation.navigate('Login');
    }

    const [inputFocused, setInputFocused] = useState(false);
    const handleInputFocus = () => {
        setInputFocused(true);
    }
    const handleInputBlur = () => {
        setInputFocused(false);
    }

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignupPress = () => {
        if (email && phone && password && confirmPassword && password === confirmPassword) {
            Alert.alert("Registration successful!");
            navigation.navigate("Login");
        } else {
            Alert.alert("Please fill in all fields and ensure passwords match");
        }
    };

    return (
        <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FFFFFF', }}>
            <View style={{ alignItems: 'center' }}>
                <LogoSign style={{ marginBottom: '15%' }} />
                <LogoApk />
            </View>
            <View style={[Style.container,
            inputFocused && { transform: [{ translateY: -176 }] }]}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}>
                <TextInput
                    placeholder="Email"
                    style={Style.input}
                    onChangeText={(text) => setEmail(text)} />
                <TextInput
                    placeholder="Phone"
                    style={Style.input}
                    onChangeText={(text) => setPhone(text)} />
                <TextInput
                    placeholder="Password"
                    style={Style.input}
                    onChangeText={(text) => setPassword(text)} />
                <TextInput
                    placeholder="Confirm Password"
                    style={Style.input}
                    onChangeText={(text) => setConfirmPassword(text)} />
                <TouchableOpacity style={Style.btn_login} onPress={handleSignupPress}>
                    <Text style={Style.title_btn}>Signup</Text>
                </TouchableOpacity>
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
        marginTop: '10%'
    },
    containerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%', marginLeft: '-55%'

    },
});
