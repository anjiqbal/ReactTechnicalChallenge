import {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {AppContext} from '../context/AppContext';
import styles from '../styles/table.styles';
import useApp from '../hooks/useApp';

function TableComponent() {
  const tableHead = ['Month', 'No. of Users', 'Cost', 'Total Cost'];

  const {cumulativeDataArray} = useApp();

  return (
    <View style={styles.tableContainer}>
      <Table>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
          flexArr={[1, 2, 1, 2]}
        />
      </Table>
      <ScrollView>
        <View>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} f>
            <Rows
              data={cumulativeDataArray}
              textStyle={styles.text}
              flexArr={[1, 2, 1, 2]}
            />
          </Table>
        </View>
      </ScrollView>
    </View>
  );
}

export default TableComponent;
