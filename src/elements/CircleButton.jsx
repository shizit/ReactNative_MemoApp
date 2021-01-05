import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  PropTypes, func, shape, string,
} from 'prop-types';

function CircleButton(props) {
  const {
    children, style, childStyle, onPress,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.circleButton, style]}
    >
      <Text style={[styles.circleButtonText, childStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  children: PropTypes.oneOfType([string, shape()]),
  style: shape(),
  childStyle: shape(),
  onPress: func,
};

CircleButton.defaultProps = {
  children: null,
  style: null,
  childStyle: null,
  onPress: null,
};

const styles = StyleSheet.create({

  circleButton: {
    backgroundColor: '#E31676',
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
