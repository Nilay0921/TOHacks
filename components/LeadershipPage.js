import React, { useState } from 'react';

import { StyleSheet, Text, View, ImageBackground, TextInput, Image, Dimensions, ScrollView } from 'react-native';

import { LineChart } from 'react-native-chart-kit'

//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { DataTable } from 'react-native-paper';



export default function LeadershipPage() {

  const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
  const tableData = [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd']
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground style={{ position: "relative", width: Dimensions.get('window').width, height: 900, alignItems: 'center', justifyContent: "center", top: 0 }} source={require('../assets/Images/background.png')}>
          <Text>Daily:</Text>
          <LineChart
            data={{
              labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
              datasets: [{
                data: [2, 1, 5, 4, 1, 2, 4]
              }]
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: 'rgb(55, 142, 122, 0.5)',
              backgroundGradientFrom: 'rgb(55, 142, 122, 0.5)',
              backgroundGradientTo: 'rgb(55, 142, 122, 0.5)',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
          <Text>Monthly:</Text>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apil', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
              datasets: [{
                data: [65, 59, 73, 81, 69, 45, 50, 69, 76, 81, 55, 60]
              }]
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: 'rgb(55, 142, 122, 0.5)',
              backgroundGradientFrom: 'rgb(55, 142, 122, 0.5)',
              backgroundGradientTo: 'rgb(55, 142, 122, 0.5)',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
          <Text>Leader Board:</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Username</DataTable.Title>
              <DataTable.Title numeric>Kilometers</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Samyak</DataTable.Cell>
              <DataTable.Cell numeric>40</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Anish</DataTable.Cell>
              <DataTable.Cell numeric>30</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Nilay</DataTable.Cell>
              <DataTable.Cell numeric>20</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Yajurva</DataTable.Cell>
              <DataTable.Cell numeric>10</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
      </ImageBackground>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
