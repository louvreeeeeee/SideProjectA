import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import GuidebookSection from './GuideBookSection';
import pests from '../pests.json'; // Ensure the correct path

const GuidebookScreen = () => {
  console.log('Pests data:', pests);

  if (!Array.isArray(pests)) {
    return <Text>No data available</Text>; // Handle the case when pests is not an array
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pests.map((item, index) => (
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
      ))}
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
