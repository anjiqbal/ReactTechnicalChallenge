import React from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import useApp from '../hooks/useApp';

function ChartComponent() {
  const {chartData, amountData, maxVal} = useApp();

  return (
    <View>
      <LineChart
        data={chartData}
        maxValue={maxVal}
        noOfSections={5}
        spacing={28}
        hideRules
        color="orange"
        yAxisColor={'black'}
        showYAxisIndices
        yAxisIndicesColor={'black'}
        yAxisIndicesWidth={10}
        height={450}
        showVerticalLines
        data2={amountData}
        color2={'blue'}
        textColor1="green"
        dataPointsHeight={16}
        dataPointsWidth={16}
        dataPointsColor1="blue"
        dataPointsColor2="red"
        textShiftY={-1}
        textShiftX={-1}
        textFontSize={13}
        xAxisLabelTextStyle={{width: 80, marginLeft: -36}}
        xAxisIndicesHeight={10}
        xAxisIndicesWidth={2}
      />
    </View>
  );
}

export default ChartComponent;
