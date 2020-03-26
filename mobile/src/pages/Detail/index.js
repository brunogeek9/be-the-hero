import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import Styles from './styles';
import logoImg from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer  from 'expo-mail-composer';

export default function Detail() {
    const navegation = useNavigation();
    const msg = 'Olá estou entrando em contato pois gostaria de ajudar no caso'
    function home(){
        navegation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'heroi do caso dog com fome',
            recipients: ['brunogeek9@gmail.com'],
            body: msg
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=558481069624&text=${msg}`);
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={home}>
                    <Feather name="arrow-left" size={17} color="#E02041" />
                </TouchableOpacity>
            </View>


            <View style={Styles.incident}>
                <Text style={Styles.incidentProperty}> ONG: </Text>
                <Text style={Styles.incidentValue}> APAD </Text>

                <Text style={Styles.incidentProperty}> CASO: </Text>
                <Text style={Styles.incidentValue}> Dog ferido </Text>

                <Text style={Styles.incidentProperty}> VALOR: </Text>
                <Text style={Styles.incidentValue}> 1000R$ </Text>
            </View>

            <View style={Styles.contactBox}>
                <Text style={Styles.heroTitle}> VALOR: </Text>
                <Text style={Styles.heroDescription}> Seja o heroi desse caso!: </Text>
                <Text style={Styles.heroDescription}> Entre em contato </Text>
                <View style={Styles.actions}>

                    <TouchableOpacity style={Styles.action} onPress={sendWhatsapp}>
                        <Text style={Styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.action} onPress={sendMail}>
                        <Text style={Styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

