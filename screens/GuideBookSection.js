import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GuidebookSection = ({
  name,
  tagalogName,
  identifyingMarks,
  whereToFind,
  damage,
  lifeCycle,
  management
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{name}</Text>
      <Text style={styles.subTitle}>Tagalog Name: {tagalogName}</Text>
      <Text style={styles.description}>Identifying Marks: {identifyingMarks}</Text>
      <Text style={styles.description}>Where to Find: {whereToFind}</Text>
      <Text style={styles.description}>Damage: {damage}</Text>
      <Text style={styles.description}>Life Cycle: {lifeCycle}</Text>
      <View style={styles.management}>
        <Text style={styles.subTitle}>Management:</Text>
        {management.Cultural.length > 0 && (
          <>
            <Text style={styles.managementTitle}>Cultural:</Text>
            {management.Cultural.map((item, index) => (
              <Text key={index} style={styles.description}>- {item}</Text>
            ))}
          </>
        )}
        {management.Biological.length > 0 && (
          <>
            <Text style={styles.managementTitle}>Biological:</Text>
            {management.Biological.map((item, index) => (
              <Text key={index} style={styles.description}>- {item}</Text>
            ))}
          </>
        )}
        {management.Chemical.length > 0 && (
          <>
            <Text style={styles.managementTitle}>Chemical:</Text>
            {management.Chemical.map((item, index) => (
              <Text key={index} style={styles.description}>- {item}</Text>
            ))}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
  },
  management: {
    marginTop: 10,
  },
  managementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default GuidebookSection;
