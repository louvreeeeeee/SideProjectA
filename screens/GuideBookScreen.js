import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const GuidebookScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leaf Diseases Detection Guidebook</Text>
        <Image
          source={require('../assets/Sample1.jpg')}
          style={styles.image}
        />
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit nec eros blandit accumsan. Integer laoreet sodales odio at blandit. Sed interdum velit in lectus blandit commodo. Sed elementum, mi ac vehicula varius, nisi nulla scelerisque nulla, nec venenatis justo metus nec risus.
        </Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require('../assets/Sample2.jpg')}
          style={styles.image}
        />
        <Text style={styles.description}>
          Duis quis turpis justo. Vivamus congue, libero eget aliquam tristique, odio neque dictum turpis, vel placerat orci justo vel mi. Sed eget nibh nec eros dapibus luctus. Vestibulum volutpat consequat nisl vel tempor. Fusce nec arcu pretium, sollicitudin enim id, luctus metus.
        </Text>
      </View>
      {/* Add more sections with images and descriptions */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default GuidebookScreen;
