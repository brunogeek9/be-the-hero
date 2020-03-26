import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png'
import Styles from './styles';
import api from '../../services/api'
export default function Incidents() {
    const navigator = useNavigation();
    const [incidents, setIncidents] = useState([]);
    function navigateToDetail() {
        navigator.navigate("Detail");
        // console.log('clicou');
    }
    async function loadIncidents() {
        const response = await api.get('incidents');
        setIncidents(response.data);
    }
    useEffect(() => {
        loadIncidents();
    },[])
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
                style={Styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                onEndReachedThreshold={0.2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={Styles.incident}>
                        <Text style={Styles.incidentProperty}> ONG: </Text>
                        <Text style={Styles.incidentValue}> {incident.name} </Text>

                        <Text style={Styles.incidentProperty}> CASO: </Text>
                        <Text style={Styles.incidentValue}> {incident.title} </Text>

                        <Text style={Styles.incidentProperty}> VALOR: </Text>
                        <Text style={Styles.incidentValue}>
                            {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
                                .format(incident.value)}
                        </Text>
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