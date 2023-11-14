import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    Image
} from 'react-native';
import { Logo, LogoBeauty, Search, Phone, User, Shope, } from '../asset';

const App: React.FC = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <View>
            <View style={style.header}>
                <LogoBeauty style={style.Beauty} />
                <Logo style={style.bet} />
                <View style={style.contenHeader}>
                    <Phone />
                    <User style={style.user} onPress={() => setToggle(!toggle)} />
                    <Shope style={style.shope} />
                </View>
            </View>
            <View style={style.barSearch}>
                <TextInput style={style.input} />
                <TouchableOpacity style={style.btnSearch}>
                    <Text style={style.titlBtn}>Search</Text>
                </TouchableOpacity>
            </View>
            {toggle && (
                <View style={style.box_toggle}>
                    <View >
                        <Text style={{ fontSize: 12, fontWeight: '800', marginLeft: '10%', marginTop: '10%' }}>layla@gmail.com</Text>
                        <Text style={{ fontSize: 12, fontWeight: '800', marginLeft: '10%', marginTop: '10%' }}>083527832746</Text>
                        <TouchableOpacity style={{ backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: '20%' }}>
                            <Text style={{ fontSize: 12, fontWeight: '800', }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};
export default App;
const style = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        // backgroundColor: 'pink',
        flexDirection: 'row',
        alignItems: 'center'
    },
    conten: {
        width: '90%',
        height: 250,
        // backgroundColor: 'red',
        marginLeft: '5%',
        marginTop: '5%',
        padding: '3%'
    },
    barSearch: {
        width: '100%',
        height: 70,
        backgroundColor: '#FFFFFF',
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        width: '60%',
        height: 41,
        borderColor: '#000000',
        borderWidth: 1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    LogoBeauty: {
        left: '10%'
    },
    contenHeader: {
        flexDirection: 'row',
        marginLeft: '28%',
        marginTop: '10%'
    },
    user: {
        marginLeft: '15%'
    },
    shope: {
        marginLeft: '15%'
    },
    Beauty: {
        left: '10%'
    },
    bet: {
        left: '25%'
    },
    btnSearch: {
        width: '25%',
        backgroundColor: '#221D1D',
        height: 41,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    titlBtn: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    box_toggle: {
        top: '45%',
        position: 'absolute',
        width: '27%',
        height: 120,
        zIndex: 2,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        left: '67%',
        alignItems: 'center',
        paddingTop: '10%'
    },


})