import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import GuidebookSection from './GuideBookSection';
import pestsData from '../pests.json'; // Ensure the correct path

const GuidebookScreen = () => {
  const pests = pestsData.pests; // Access the array directly from the pests key

  console.log('Pests data:', pests);
  console.log('Data type:', typeof pests);
  console.log('Is Array:', Array.isArray(pests));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.isArray(pests) && pests.length > 0 ? (
        pests.map((item, index) => (
          <GuidebookSection
            key={index}
            name={item.name}
            tagalogName={item.tagalog_name}
            identifyingMarks={item.identifying_marks}
            whereToFind={item.where_to_find}
            damage={item.damage}
            lifeCycle={item.life_cycle}
            management={item.management}
          />
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default GuidebookScreen;
