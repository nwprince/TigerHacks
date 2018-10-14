import { Dimensions } from 'react-native';
export default class Constants {
}
Constants.Width = Dimensions.get('window').width;
Constants.Height = Dimensions.get('window').height;
Constants.CardHeight = 0.85 * Constants.Height;
Constants.AppName = 'soberGatez';
Constants.AppUrl = 'http://api.arxivpully.us/api/query';
Constants.InitialTopics = ['Machine Learning', 'Security', 'Python', 'Music', 'Media',
    'Artificial Intelligence', 'Internet of Things', 'Blockchain', 'Microservices', 'Analytics ',
    'Quantum', 'Robotics', 'Supercomputer', 'Serverless Architecture', 'Missouri'];
Constants.UnsplashKey = '10389808-040f503b64a3fb434a11ab621';
Constants.UnsplashSecret = 'bf237465b1935a8793f4919c723da6ae54b0047b6a4b72191c509169959c92d2';
//# sourceMappingURL=Constants.js.map