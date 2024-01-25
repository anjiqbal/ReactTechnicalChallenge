import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
import CustomRadioButton from './CustomRadioButton';
import {AppContext} from '../context/AppContext';
import styles from '../styles/filter.styles';
import useApp from '../hooks/useApp';

function FilterComponent() {
  const appContext = useContext(AppContext);
  const {state} = appContext;
  const {genderFilter, regionFilter, minimumSpendFilter} = state;
  const {
    openDropdown,
    setOpenDropdown,
    dropdownValue,
    setDropdownValue,
    regions,
    setRegions,
    selectedValue,
    spend,
    modalVisible,
    handleGenderFilter,
    handleRegionFilter,
    handleSpendFilter,
    handleModalClose,
    setModalVisible,
  } = useApp();

  const filterSummary = `Gender: ${genderFilter}, Region: ${regionFilter},
  Minimal Spend: £${spend}`;

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.showFiltersButton}>
        <Text style={styles.showFiltersButtonText}>Show Filters</Text>
      </TouchableOpacity>
      {regionFilter != '' && (
        <View style={styles.selectedFiltersContainer}>
          <Text style={styles.selectedFiltersText}>{filterSummary}</Text>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <ScrollView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.container}>
              <CustomRadioButton
                label="All"
                selected={selectedValue === 'All'}
                onSelect={() => handleGenderFilter('All')}
              />
              <CustomRadioButton
                label="Male"
                selected={selectedValue === 'Male'}
                onSelect={() => handleGenderFilter('Male')}
              />
              <CustomRadioButton
                label="Female"
                selected={selectedValue === 'Female'}
                onSelect={() => handleGenderFilter('Female')}
              />
            </View>
            <Text style={styles.label}>Select Region</Text>
            <DropDownPicker
              open={openDropdown}
              value={dropdownValue}
              items={regions}
              setOpen={setOpenDropdown}
              setValue={setDropdownValue}
              setItems={setRegions}
              onSelectItem={region => handleRegionFilter(region.value)}
            />
            <Text style={styles.label}>Minimal Spend: {spend}</Text>
            <View style={styles.slider}>
              <Text style={styles.sliderLabel}>£0</Text>
              <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={5000}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#808080"
                onSlidingComplete={amount => handleSpendFilter(amount)}
                onValueChange={amount => handleSpendFilter(amount)}
                step={25}
                tapToSeek
                value={minimumSpendFilter}
              />
              <Text style={styles.sliderLabel}>£5000</Text>
            </View>
            <TouchableOpacity
              onPress={handleModalClose}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

export default FilterComponent;
