import { Dimensions } from 'react-native';

export default class Constants {
  static Width: number = Dimensions.get('window').width;
  static Height: number = Dimensions.get('window').height;
  static AppName: string = 'KOLOK';
}
