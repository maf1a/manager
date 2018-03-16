import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList } from 'react-native';
import ListItem from './list-item';

class EmployeeList extends Component {

  renderList(item) {
    return(
      <ListItem employee={item}/>
    );
  }

  render() {
    return(
      <View>
        {this.props.list
          ?
          (<FlatList
            data={this.props.list}
            renderItem={({item}) => this.renderList(item)}
          />)
          :
          (<Text>No employees</Text>)}
      </View>
    );
  }
}

mapStateToProps = state => {
  return { list: state.employees }
}

export default connect(mapStateToProps, null)(EmployeeList);
