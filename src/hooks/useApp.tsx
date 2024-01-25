import {useState, useEffect, useContext} from 'react';
import {Alert} from 'react-native';
import {AppContext} from '../context/AppContext';

export default function useApp() {
  const [totalUsersByMonth, setTotalUsersByMonth] = useState({});
  const [userAmountsArray, setUserAmountsArray] = useState([]);

  const [chartData, setChartData] = useState([]);
  const [amountData, setAmountData] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(null);
  const [regions, setRegions] = useState([
    {label: 'United States', value: 'United States'},
    {label: 'Europe', value: 'Europe'},
    {label: 'APAC', value: 'APAC'},
    {label: 'Latin America', value: 'Latin America'},
  ]);
  const [selectedValue, setSelectedValue] = useState('All');
  const [spend, setSpend] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const {state, setState} = useContext(AppContext);
  const {data, regionFilter, genderFilter, minimumSpendFilter, initialData} =
    state;

  useEffect(() => {
    const calculateUserStatistics = () => {
      const totalUsersByMonth = data.reduce((accumulator, item) => {
        const {birthday} = item;

        if (!accumulator[birthday]) {
          accumulator[birthday] = 1;
        } else {
          accumulator[birthday] += 1;
        }

        return accumulator;
      }, {});
      const amountsArray = Array.from(
        {length: 12},
        (item, index) => totalUsersByMonth[(index + 1).toString()] || 0,
      );

      setTotalUsersByMonth(totalUsersByMonth);
      setUserAmountsArray(amountsArray);
    };

    calculateUserStatistics();
  }, [data]);

  const cumulativeDataArray = Array.from({length: 12}, (element, index) => {
    const month = index + 1;
    const totalUsers = totalUsersByMonth[month] || 0;

    const totalCost = totalUsers * 5;

    const cumulativeCost = Array.from({length: index + 1}, (element, i) => {
      const m = i + 1;
      return (totalUsersByMonth[m] || 0) * 5;
    }).reduce((sum, cost) => sum + cost, 0);

    return [month, totalUsers, totalCost, cumulativeCost];
  });

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const transformUserArray = (userAmountsData, labels) => {
    return userAmountsData.map((value, index) => {
      const monthLabel = labels[index % 12];
      return {
        value: value,
        dataPointText: value.toString(),
        label: monthLabel,
        showXAxisIndex: true,
      };
    });
  };
  const transformAmountArray = amountArray => {
    return amountArray.map((value, index) => {
      return {
        value: value,
        dataPointText: value.toString(),
      };
    });
  };
  useEffect(() => {
    const transformedData = transformUserArray(userAmountsArray, labels);
    const transformedCumulativeData = transformAmountArray(cumulativeAmounts);
    setAmountData(transformedCumulativeData);
    setChartData(transformedData);
  }, [userAmountsArray]);

  const cumulativeAmounts = userAmountsArray.reduce(
    (accumulator, userCount) => {
      const monthlyAmount = userCount * 5;
      accumulator.push(
        accumulator.length > 0
          ? accumulator[accumulator.length - 1] + monthlyAmount
          : monthlyAmount,
      );
      return accumulator;
    },
    [],
  );

  const maxVal = Math.ceil(amountData[11]?.value / 100) * 100 || 1000;

  const handleGenderFilter = (selectedGender: string) => {
    setSelectedValue(selectedGender);
    setState(prev => ({...prev, genderFilter: selectedGender}));
  };

  const handleRegionFilter = (selectedRegion: string) => {
    setState(prev => ({...prev, regionFilter: selectedRegion}));
  };

  const handleSpendFilter = (selectedMinimumSpend: number) => {
    setSpend(selectedMinimumSpend);
    setState(prev => ({...prev, minimumSpendFilter: selectedMinimumSpend}));
  };

  const handleFilter = (
    genderFilter: string,
    regionFilter: string,
    minimumSpendFilter: number,
  ) => {
    const filteredData = initialData.filter(item => {
      if (genderFilter === 'All') {
        return item.region === regionFilter && item.spend >= minimumSpendFilter;
      } else {
        return (
          item.gender === genderFilter &&
          item.region === regionFilter &&
          item.spend >= minimumSpendFilter
        );
      }
    });
    setState(prev => ({...prev, data: filteredData}));
  };

  useEffect(() => {
    handleFilter(genderFilter, regionFilter, minimumSpendFilter);
  }, [genderFilter, regionFilter, minimumSpendFilter]);

  const handleModalClose = () => {
    if (regionFilter === '') {
      Alert.alert(
        'Warning',
        'Please select a region before closing the filters.',
        [{text: 'OK'}],
        {cancelable: false},
      );
    } else {
      setModalVisible(false);
    }
  };

  return {
    totalUsersByMonth,
    userAmountsArray,
    regionFilter,
    chartData,
    amountData,
    maxVal,
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
    cumulativeDataArray,
  };
}
