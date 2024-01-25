import {View, SafeAreaView, ScrollView} from 'react-native';
import FilterComponent from './src/components/Filter';
import ChartComponent from './src/components/ChartComponent';
import TableComponent from './src/components/TableComponent';
import styles from './src/styles/app.styles';
import useApp from './src/hooks/useApp';

export default function App() {
  const {regionFilter} = useApp();

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.container}>
        <View>
          <FilterComponent />
        </View>
        {regionFilter != '' && (
          <ScrollView>
            <ScrollView>
              <View>
                <ChartComponent />
              </View>
            </ScrollView>
            <View>
              <TableComponent />
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
