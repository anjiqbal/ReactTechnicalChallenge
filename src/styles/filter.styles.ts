import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 1,
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  radioButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: '#007BFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioButtonText: {
    fontSize: 16,
  },
  slider: {
    paddingTop: 20,
    paddingBottom: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sliderLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  showFiltersButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  showFiltersButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedFiltersContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFF',
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 30,
  },
  selectedFiltersText: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFF',
  },
  clearFiltersText: {
    color: 'blue',
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
});
