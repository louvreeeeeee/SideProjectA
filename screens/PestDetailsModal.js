import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PestDetailsModal = ({ visible, pest, onClose, onManagePress }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true} // Set to true to make the modal floating
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <ScrollView contentContainerStyle={styles.modalContentContainer}>
            {pest && (
              <>
                <Text style={styles.modalTitle}>{pest.name.toUpperCase()}</Text>
                <Text style={styles.modalSubTitle}>Tagalog Name</Text>
                <Text style={styles.modalText}>{pest.tagalog_name}</Text>
                <Text style={styles.modalSubTitle}>Identifying Marks</Text>
                <Text style={styles.modalText}>{pest.identifying_marks}</Text>
                <Text style={styles.modalSubTitle}>Where to Find</Text>
                <Text style={styles.modalText}>{pest.where_to_find}</Text>
                <Text style={styles.modalSubTitle}>Damage</Text>
                <Text style={styles.modalText}>{pest.damage}</Text>
                <Text style={styles.modalSubTitle}>Life Cycle</Text>
                <Text style={styles.modalText}>{pest.life_cycle}</Text>
                <TouchableOpacity
                  style={styles.managementButton}
                  onPress={onManagePress}
                >
                  <Text style={styles.managementButtonText}>How to Manage</Text>
                </TouchableOpacity>
              </>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const ManagementDetailsModal = ({ visible, pest, onClose }) => {
  const renderManagementDetails = (management) => {
    return Object.entries(management).map(([category, strategies]) => (
      <View key={category} style={styles.managementDetail}>
        <Text style={styles.managementDetailTitle}>{category}</Text>
        {strategies.map((strategy, index) => (
          <View key={index} style={styles.strategyContainer}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
            </View>
            <View style={styles.strategyTextContainer}>
              <Text style={styles.strategyText}>{strategy}</Text>
            </View>
          </View>
        ))}
      </View>
    ));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true} // Set to true to make the modal floating
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.managementModalContent}>
          <ScrollView contentContainerStyle={styles.modalContentContainer}>
            {pest && (
              <>
                <Text style={styles.managementTitle}>How to Deal w/ {pest.name}</Text>
                {renderManagementDetails(pest.management)}
              </>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // Reuse the styles from your previous code
});

export { PestDetailsModal, ManagementDetailsModal };
