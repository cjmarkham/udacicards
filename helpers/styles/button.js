import { StyleSheet, Platform } from 'react-native';
import { Brand, BrandDark, TypeDefault } from '../../utils/colors';

export default StyleSheet.create({
  default: {
    padding: 20,
    borderRadius: Platform.OS === 'ios' ? 2 : 8,
    borderWidth: 1,
    borderColor: TypeDefault,
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
