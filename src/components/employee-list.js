import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/employee-action';
import { Text, View, FlatList } from 'react-native';

class EmployeeCreate extends Component {

  componentDidMount() {

  }

  render() {
    return(
      <View>
        {this.props.list ? (<FlatList
          data={this.props.list}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />) : (<Text>No employees found</Text>)}
      </View>
    );
  }
}

mapStateToProps = state => {
  return { list: state.employees }
}

export default connect(mapStateToProps, null)(EmployeeCreate);
