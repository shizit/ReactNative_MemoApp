import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';

function CircleButton(props) {
  const { children, color, onPress } = props;
  let bgColor = '#E31676';
  let textColor = '#fff';
  if (color === 'white') {
    bgColor = '#fff';
    textColor = '#E31676';
  }

  return (
    // eslint-disable-next-line no-use-before-define
    <TouchableOpacity onPress={onPress} style={[styles.circleButton, { backgroundColor: bgColor }]}>
      <Text style={[styles.circleButtonText, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}

CircleButton.prototypes = {
  color: string,
  onPress: func,
};

const styles = StyleSheet.create({

  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 5,
  },

  circleButtonText: {
    fontSize: 28,
  },

});

export default CircleButton;
