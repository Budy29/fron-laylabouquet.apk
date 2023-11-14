import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import Header from '../components/header';
import { Back, } from '../asset';
import { useNavigation } from '@react-navigation/native';
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
        description: 'Rp.25.000',
        gbr: require('../asset/image/image1.png'),
    },
    {
        id: 2,
        name: 'Graduation Bouquet',
        description: 'Rp.23.000',
        gbr: require('../asset/image/image2.png'),
    },
    {
        id: 3,
        name: 'Artificial Flowers',
        description: 'Rp.15.000',
        gbr: require('../asset/image/image3.png'),
    },
    {
        id: 4,
        name: 'Money Bouquet',
        description: 'Rp.11.000',
        gbr: require('../asset/image/image1.png'),
    },
    {
        id: 5,
        name: 'Fresh Flowers',
        description: 'Rp.35.000',
        gbr: require('../asset/image/image2.png'),
    },
    {
        id: 6,
        name: 'Bloombox Flowers',
        description: 'Rp.12.000',
        gbr: require('../asset/image/image3.png'),
    },
    {
        id: 7,
        name: 'Bloombox Ballon',
        description: 'Rp.12.000',
        gbr: require('../asset/image/image1.png'),
    },
    {
        id: 8,
        name: 'Tabble Setting',
        description: 'Rp. 13.000',
        gbr: require('../asset/image/image2.png'),
    },
    {
        id: 9,
        name: 'Hand Bouquet',
        description: 'Rp.23.000',
        gbr: require('../asset/image/image3.png'),
    },
    {
        id: 10,
        name: 'Wedding Car Decor',
        description: 'Rp.150.000',
        gbr: require('../asset/image/image1.png'),
    },
    {
        id: 11,
        name: 'Arragement Flowers Basket',
        description: 'Rp.23.000',
        gbr: require('../asset/image/image2.png'),
    },
    {
        id: 12,
        name: 'BMoney Cake Tower',
        description: 'Rp.29.000',
        gbr: require('../asset/image/image1.png'),
    },
    // {
    //     id: 13,
    //     name: 'Bloombox Flowers',
    //     description: 'Deskripsi Produk 3',
    //     gbr: require('../asset/image/image3.png'),
    // },
    // {
    //     id: 14,
    //     name: 'Bloombox Ballon',
    //     description: 'Deskripsi Produk 1',
    //     gbr: require('../asset/image/image1.png'),
    // },
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
    const groupdImage = groupImage(productsData, 2);

    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack;
    }
    return (
        <View style={style.container}>
            <Header />
            <View style={style.btnHeader}>
                <View style={style.headercokk}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Back />
                    </TouchableOpacity>
                    <Text style={style.titleHeader}>
                        Birthday Flowers
                    </Text>
                </View>
            </View>
            <ScrollView style={style.conten}>
                {groupdImage.map((group, index) => (
                    <View key={index} style={{ flexDirection: 'row', width: '100%', }}>
                        {group.map(product => (
                            <View key={product.id} style={{ margin: '1%', }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: '6%', paddingBottom: '15%' }}>
                                    <Image
                                        source={product.gbr}
                                        style={{ width: 162, height: 150, marginLeft: '0%', borderRadius: 15, marginTop: '0%' }}
                                    />
                                    <TouchableOpacity style={style.btn_Category}>
                                        <Text style={style.btn_titleCategory}>{product.description}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
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
    conten: {
        width: '100%',
        maxHeight: '65%',
        // backgroundColor: 'red',
        marginLeft: '0%',
        marginTop: '5%',
        padding: '3%'
    },
    btnHeader: {
        // backgroundColor: 'blue',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%'
    },
    headercokk: {
        flexDirection: 'row',
        // backgroundColor: '#FFF',
        width: '85%',
        height: '80%',
        alignItems: 'center',
        paddingLeft: '3%'
    },
    titleHeader: {
        fontFamily: 'Inter',
        fontSize: 25,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
        marginLeft: '20%',
        lineHeight: 30.26,
        letterSpacing: -0.3
    },
    btn_Category: {
        width: '92%',
        height: 35,
        backgroundColor: '#FFB0B0',
        justifyContent: 'center',
        borderRadius: 4
    },
    btn_titleCategory: {
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        letterSpacing: -0.30000001192092896,
        textAlign: 'center',
        color: '#FFFFFF'

    }
});

