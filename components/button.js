import React from 'react';
import {
  Platform,
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
import { buttonStyles } from '../helpers/styles';

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
        style={[buttonStyles.default, buttonStyles[type], style]}>
        <Text style={buttonStyles[type === 'primary' ? 'textLight' : 'textDark']}>
          { children }
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
