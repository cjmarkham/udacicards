import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Brand,
  BrandDark,
  BrandLight,
  TypeDefault,
} from '../utils/colors';

class Button extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    type: PropTypes.string,
    style: PropTypes.object,
  }

  render () {
    const { onPress, children, type, style } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.default, styles[type], style]}>
        <Text style={styles[type === 'primary' ? 'textLight' : 'textDark']}>
          { children }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    padding: 20,
    borderRadius: Platform.OS === 'ios' ? 2 : 8,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
  },
  primary: {
    borderColor: BrandDark,
    backgroundColor: Brand,
  },
  textLight: {
    color: 'white',
  },
  textDark: {
    color: TypeDefault,
  },
});

export default Button;
