import { Dimensions } from 'react-native';

export default class Constants {
  static Width: number = Dimensions.get('window').width;
  static Height: number = Dimensions.get('window').height;

  static CardHeight: number = 0.85 * Constants.Height;

  static AppName: string = 'soberGatez';
  static AppUrl: string = 'http://api.arxivpully.us/api/query';
  static InitialTopics: string[] = ['Machine Learning', 'Security', 'Python', 'Music', 'Media',
    'Artificial Intelligence', 'Internet of Things', 'Blockchain', 'Microservices', 'Analytics ',
    'Quantum', 'Robotics', 'Supercomputer', 'Serverless Architecture', 'Missouri'];

  static UnsplashKey: string = '483be3eddf79a17ee4799205efffc2e40267bd28df3686fd1fd2b074c36a5654';
  static UnsplashSecret: string = 'bf237465b1935a8793f4919c723da6ae54b0047b6a4b72191c509169959c92d2';
}
