import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png'
import Styles from './styles';

export default function Incidents() {
    const navigator = useNavigation();
    function navigateToDetail() {
        navigator.navigate("Detail");
        // console.log('clicou');
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image source={logoImg} />
                <Text>
                    Total de <Text style={Styles.headerTextBold}>0 Casos</Text>
                </Text>
            </View>

            <Text style={Styles.title}> Bem-vindo! </Text>
            <Text style={Styles.description}> Escolha um dos casos abaixo e salve o dia </Text>

            <FlatList
                // keyExtractor={Math.random()}
                style={Styles.incidentList}
                data={[1, 2, 3]}
                renderItem={() => (
                    <View style={Styles.incident}>
                        <Text style={Styles.incidentProperty}> ONG: </Text>
                        <Text style={Styles.incidentValue}> APAD </Text>

                        <Text style={Styles.incidentProperty}> CASO: </Text>
                        <Text style={Styles.incidentValue}> Dog ferido </Text>

                        <Text style={Styles.incidentProperty}> VALOR: </Text>
                        <Text style={Styles.incidentValue}> 1000R$ </Text>
                        <TouchableOpacity
                            style={Styles.detailsButton}
                            onPress={navigateToDetail}>
                            <Text style={Styles.detailsButtonText}>Detalhes Caso</Text>
                            <Feather name="arrow-right" size={17} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />



        </View>
    )
}