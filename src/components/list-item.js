import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common/card-section';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
    console.log('tapped');
  }

  render() {
    const { name, uid } = this.props.employee;
    return(
      <TouchableWithoutFeedback key={uid} onPress={() => this.onRowPress()}>
        <View>
            <CardSection>
              <Text style={styles.titleStyle}>
                {name}
              </Text>
            </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft:15
  }
};

export default ListItem;
