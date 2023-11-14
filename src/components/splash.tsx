import React, { useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { LogoApk } from "../asset";
import { CircleFade } from 'react-native-animated-spinkit'
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("SplashScreen"); // Ganti "NextScreen" dengan nama halaman berikutnya
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
            <LogoApk />
            <CircleFade size={48} color="#F8C8C8" style={{ marginTop: '15%' }} />
        </View>
    )
};

export default Splash;
const Style = StyleSheet.create({

});
