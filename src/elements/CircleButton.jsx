import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  PropTypes, func, shape, string,
} from 'prop-types';

function CircleButton(props) {
  const {
    children, textColor, color, onPress,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.circleButton, { backgroundColor: color }]}
    >
      <Text style={[styles.circleButtonText, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  children: PropTypes.oneOfType([string, shape()]),
  color: string,
  textColor: string,
  onPress: func.isRequired,
};

CircleButton.defaultProps = {
  children: null,
  color: '#E31676',
  textColor: '#fff',
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
