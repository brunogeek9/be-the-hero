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
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigateToDetail(incident) {
        navigator.navigate("Detail", { incident });
    }
    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);
        
        const response = await api.get(`incidents`, {
            params: { page }
        });

        // setIncidents(response.data);
        setIncidents([...incidents, ...response.data])
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }
    
    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image source={logoImg} />
                <Text>
                    Total de <Text style={Styles.headerTextBold}>{total} Casos</Text>
                </Text>
            </View>

            <Text style={Styles.title}> Bem-vindo! </Text>
            <Text style={Styles.description}> Escolha um dos casos abaixo e salve o dia </Text>

            <FlatList
                style={Styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                onEndReachedThreshold={0.2}
                onEndReached={loadIncidents}
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
                            onPress={() => navigateToDetail(incident)}>
                            <Text style={Styles.detailsButtonText}>Detalhes Caso</Text>
                            <Feather name="arrow-right" size={17} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />



        </View>
    )
}