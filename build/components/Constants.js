import { Dimensions } from 'react-native';
export default class Constants {
}
Constants.Width = Dimensions.get('window').width;
Constants.Height = Dimensions.get('window').height;
Constants.AppName = 'soberGatez';
Constants.AppUrl = 'https://dd7d530b.ngrok.io/api/query';
Constants.InitialTopics = ['Machine Learning', 'Security', 'Python', 'Music', 'Media'];
Constants.CardHeight = 0.9 * Constants.Height;
//# sourceMappingURL=Constants.js.map