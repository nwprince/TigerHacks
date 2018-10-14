import { Dimensions } from 'react-native';

export default class Constants {
  static Width: number = Dimensions.get('window').width;
  static Height: number = Dimensions.get('window').height;
  static AppName: string = 'soberGatez';
  static AppUrl: string = 'https://dd7d530b.ngrok.io/api/query';
  static InitialTopics: string[] = ['Machine Learning', 'Security', 'Python', 'Music', 'Media'];
  static CardHeight: number = 0.9 * Constants.Height;
}
