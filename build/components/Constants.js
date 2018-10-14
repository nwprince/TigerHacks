import { Dimensions } from 'react-native';
export default class Constants {
}
Constants.Width = Dimensions.get('window').width;
Constants.Height = Dimensions.get('window').height;
Constants.CardHeight = 0.85 * Constants.Height;
Constants.AppName = 'soberGatez';
Constants.AppUrl = 'http://api.arxivpully.us/api/query';
Constants.InitialTopics = ['Machine Learning', 'Security', 'Python', 'Music', 'Media'];
Constants.UnsplashKey = '483be3eddf79a17ee4799205efffc2e40267bd28df3686fd1fd2b074c36a5654';
Constants.UnsplashSecret = 'bf237465b1935a8793f4919c723da6ae54b0047b6a4b72191c509169959c92d2';
//# sourceMappingURL=Constants.js.map