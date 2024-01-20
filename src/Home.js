import React from "react";
import { TouchableOpacity, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import styles from "../styles/Styles";
import CarData from "../json/car-list .json";
import { AntDesign } from '@expo/vector-icons';

function Home() {

    const [fontsLoaded] = useFonts({
        'AlfaSlabOne-Regular': require('../assets/fonts/AlfaSlabOne-Regular.ttf'),
        'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.View1}>
            <SafeAreaView style={styles.SafeAreaView}>
                <Text style={styles.Title}>Cochedex</Text>
                <View style={{ height: 20 }} />
                <TouchableOpacity style={styles.SearchBar}>
                    <Text style={styles.SomeTextDark}>Search</Text>
                </TouchableOpacity>
                <View style={{ height: 20 }} />
                <ScrollView>
                    {CarData.map((brandItem) => (
                        <View key={brandItem.brand}>
                            <Text style={styles.BrandText}>{brandItem.brand}</Text>
                            <View>
                                {brandItem.models.map((model) => (
                                    <View key={model}>
                                        <Text style={styles.ModelText}> {brandItem.brand} · {model}</Text>
                                        <TouchableOpacity style={styles.InsertFoto}>
                                            <AntDesign name="plussquareo" size={48} color="black" />
                                        </TouchableOpacity>

                                    </View>

                                ))}
                            </View>
                        </View>
                    ))}
                </ScrollView>

            </SafeAreaView>
        </View>
    );
}

export default Home;