import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './card-section';
import { Button } from './button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { containerStyle, cardSectionStyle, textStyle } = styles;

  return (
    <Modal
      style={styles.modal}
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{ children }</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Button payloadFunction={onAccept}>Yes</Button>
          <Button payloadFunction={onDecline}>No</Button>
        </CardSection>
    </View>
  </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
    padding: 10
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex:1,
    justifyContent: 'center'
  }
}

export { Confirm };
