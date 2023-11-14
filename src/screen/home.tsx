import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    Image,
    ScrollView
} from 'react-native';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';
import { Img, Logo, LogoBeauty, Search, Phone, User, Shope, Spiner, Image1, Image2, Image3 } from '../asset';
interface Product {
    id: number;
    name: string;
    description: string;
    gbr: any;
}
const productsData: Product[] = [
    {
        id: 1,
        name: 'Birthday Flowers',
        description: 'produk istimewa',
        gbr: require('../asset/image/image1.png'),
    },
    {
        id: 2,
        name: 'Graduation Bouquet',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image2.png'),
    },
    {
        id: 3,
        name: 'Artificial Flowers',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image3.png'),
    },
    {
        id: 4,
        name: 'Money Bouquet',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image1.png'),
    },
    {
        id: 5,
        name: 'Fresh Flowers',
        description: 'Deskripsi Produk 2',
        gbr: require('../asset/image/image2.png'),
    },
    {
        id: 6,
        name: 'Bloombox Flowers',
        description: 'Deskripsi Produk 3',
        gbr: require('../asset/image/image3.png'),
    },
    {
        id: 7,
        name: 'Bloombox Ballon',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image1.png'),
    },
    {
        id: 8,
        name: 'Tabble Setting',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image2.png'),
    },
    {
        id: 9,
        name: 'Hand Bouquet',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image3.png'),
    },
    {
        id: 10,
        name: 'Wedding Car Decor',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image1.png'),
    },
    {
        id: 11,
        name: 'Arragement Flowers Basket',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image2.png'),
    },
    {
        id: 12,
        name: 'BMoney Cake Tower',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image1.png'),
    },
    {
        id: 13,
        name: 'Bloombox Flowers',
        description: 'Deskripsi Produk 3',
        gbr: require('../asset/image/image3.png'),
    },
    {
        id: 14,
        name: 'Bloombox Ballon',
        description: 'Deskripsi Produk 1',
        gbr: require('../asset/image/image1.png'),
    },
    // {
    //     id: 15,
    //     name: 'Tabble Setting',
    //     description: 'Deskripsi Produk 1',
    //     gbr: require('../asset/image/image2.png'),
    // },
    // {
    //     id: 16,
    //     name: 'Hand Bouquet',
    //     description: 'Deskripsi Produk 1',
    //     gbr: require('../asset/image/image3.png'),
    // },
    // {
    //     id: 17,
    //     name: 'Wedding Car Decor',
    //     description: 'Deskripsi Produk 1',
    //     gbr: require('../asset/image/image1.png'),
    // },
    // {
    //     id: 18,
    //     name: 'Arragement Flowers Basket',
    //     description: 'Deskripsi Produk 1',
    //     gbr: require('../asset/image/image2.png'),
    // },
    // {
    //     id: 19,
    //     name: 'BMoney Cake Tower',
    //     description: 'Deskripsi Produk 1',
    //     gbr: require('../asset/image/image1.png'),
    // },
];

const App: React.FC = () => {
    const groupImage = (data: [], groupSize: number): Product[][] => {
        const groups: Product[][] = [];
        for (let i = 0; i < data.length; i += groupSize) {
            groups.push(data.slice(i, i + groupSize));
        }
        return groups;
    }
    const groupdImage = groupImage(productsData, 4);

    const navigation = useNavigation();
    const handleKlik = () => {
        navigation.navigate('Category');
    }
    return (
        <View style={style.container}>
            <Header />
            <ScrollView style={style.conten}>
                {groupdImage.map((group, index) => (
                    <View key={index} style={{ flexDirection: 'row', width: '100%', }}>
                        {group.map(product => (
                            <View key={product.id} style={{ margin: '1%', }}>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }} onPress={handleKlik}>
                                    <Image
                                        source={product.gbr}
                                        style={{ width: 56, height: 55, borderRadius: 28, marginLeft: '7%', borderWidth: 1, borderColor: '#F8C8C8', }}
                                    />
                                    <Text style={{ fontSize: 7, textAlign: 'center', }}>{product.name}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
            <View style={style.footer}>
                <Img style={{ widht: '50%' }} />
                <View style={style.contenFooter}>
                    <Text style={style.contenFooterTeks}>
                        Setelah lebih dari 1 dekade melayani, lalyabouquet kini berkembang kedunia seserahan dan mahar. yang bernama seserahan.darimu more info klik
                    </Text>
                    <TouchableOpacity style={{ zIndex: 3, marginTop: '-4.5%', left: '21%' }}>
                        <Text style={style.contenFooterTeks_btn}>
                            disini
                        </Text>
                    </TouchableOpacity>
                    <Text style={style.contenFooterTeks}>
                        Platform pembawa ungkapan kasih & silaturahmi melalui karangan bunga,aneka parcel/ hampers,mahar,seserahan dan gift.
                    </Text>
                </View>
                <Spiner />
                <View style={style.footerConten}>
                    <TouchableOpacity>
                        <Text style={style.contenTeks}>Instagram</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.contenWhatsApp}>
                        <Text style={style.contenTeks}>WhatsApp</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.separator} />
                <Text style={style.footerText}>lalyabouquet</Text>
            </View>
        </View>
    );
};

export default App;
const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    header: {
        width: '100%',
        height: 80,
        // backgroundColor: 'pink',
        flexDirection: 'row',
        alignItems: 'center'
    },
    conten: {
        width: '90%',
        height: 240,
        maxHeight: 230,
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
    footer: {
        width: '100%',
        height: 462,
        // backgroundColor: '#438887',
        marginTop: '5%',
        alignItems: 'center',
        padding: '2%'
    },

    footerText: {
        fontSize: 10,
        fontWeight: '400',
    },
    footerConten: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenTeks: {
        color: '#000',
        fontWeight: '500',

    },
    contenWhatsApp: {
        marginLeft: '5%'
    },
    separator: {
        borderColor: '#000',
        borderWidth: 1,
        width: '90%'
    },
    LogoBeauty: {
        left: '10%'
    },
    contenHeader: {
        flexDirection: 'row',
        marginLeft: '28%',
        marginTop: '10%'
    },
    contenFooter: {
        width: '90%',
        marginBottom: '5%',
        padding: '3%',
        backgroundColor: '#FFF'
    },
    contenFooterTeks: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 12,
        color: '#000',
        letterSpacing: -0.3,
        lineHeight: 12.1
    },
    contenFooterTeks_btn: {
        color: '#000',
        fontWeight: '700',
        textDecorationLine: 'underline',
        fontFamily: 'Inter',
        fontSize: 12
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

});

