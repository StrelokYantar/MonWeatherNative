// Listes de tous les imports principaux et nécessaires pour le bon fonctionnement de l'application.
// Dans le import on va récupérer le useState et le useEffect
import React, { useState, useEffect } from 'react'; // Les deux hooks d'effets

import DayWeather from './components/DayWeather';
import NextDaysWeather from './components/NextDaysWeather';

import { ScrollView, StyleSheet, Text, View } from 'react-native'; // utiliser de l'API StyleSheet
import axios from 'axios'; // On importe Axios, librairie asynchrone client HTTP qui permet de récupérer et d'afficher les données provenant d'une API.

// Page principal de l'application
export default function App() {
  // State
  // Création de la fonction et utilisation de la variable d'état dataMini et dataMaxi
  const [dataMini, setDataMini] = useState([]);
  const [dataMaxi, setDataMaxi] = useState([]);


  // On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage
  useEffect(() => {

    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=348423add36511b1c1c01fcbd408e1bb`)

      .then(response => {
        setDataMini(response.data)
        setDataMaxi(response.data)

        // On récupère les données
        console.log(response.data)
        
      })
  }, []);

  // Les composants View,Text...on les importe de React Native, ils sont crées dans la librairie de React Native
  return (
    // Dans le return on récupère le style ou toutes les propriétés contenu dans le container
    <ScrollView contentContainerStyle={styles.containerStyle} style={styles.container}>
      <DayWeather data={data} />
      <View>
        <NextDaysWeather data={data} />
        <Text style={styles.textColor}>456</Text>
        <Text>{dataMini}</Text>
        <Text>{dataMaxi}</Text>

      </View>
      
    </ScrollView>
    
  );
}

// Style CSS de mise en forme de l'écran
// On crée const styles et à l'intérieur on a un composant StyleSheet avec la méthode .create
const styles = StyleSheet.create({
  // Pour que le style fonctionne il faut le récupérer dans le return
  // Container => nouvelle objet 
  container: {
    // On active le Flex en: 1
    flex: 1,
    backgroundColor: '#b9b3b9',
    // On centre verticalement
    alignItems: 'center',
    // On centre horizontalement
    justifyContent: 'center',
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#0aad00',
    fontSize: 40
  }
});
