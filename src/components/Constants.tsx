import { Dimensions } from 'react-native';

export default class Constants {
  static Width: number = Dimensions.get('window').width;
  static Height: number = Dimensions.get('window').height;

  static CardHeight: number = 0.85 * Constants.Height;

  static AppName: string = 'soberGatez';
  static AppUrl: string = 'http://api.arxivpully.us/api/query';
  static InitialTopics: string[] = ['Python', 'Music', 'Media'];

  static UnsplashKey: string = '10389808-040f503b64a3fb434a11ab621';
  static UnsplashSecret: string = 'bf237465b1935a8793f4919c723da6ae54b0047b6a4b72191c509169959c92d2';
}
