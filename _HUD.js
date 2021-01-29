var ProgressHUD = require('react-native-progress-hud');
var components = React.createClass({
  mixins: [ProgressHUD.Mixin],
  
  render(){
    return(
      <View>
        <ProgressHUD
           isVisible={this.state.is_hud_visible}
           isDismissible={true}
           overlayColor="rgba(0,0,0,0.11)"/>
      </View>
    );
  }
  
 this.showProgressHUD();
 var childComponentHUD = React.createClass{
  render(){
    contextTypes:{
      showProgressHUD: React.PropTypes.func,
      dismissProgressHUD: React.PropTypes.func
    }
    return(
      <View>
        <TouchableHighlight
         onPress={this.context.showProgressHUD}>Show Progress HUD </TouchableHighlight>
      </View>
      );
  }
  import HUD, { LoadingHUD } from 'react-native-hud-hybrid'
  
  text(){
    HUD.text('Initializing HUD Overlay Screening :: ...');
    HUD.text('Loading Crypto-Securities Landing :: ...');
     }
  };
  const HudAi = require('hud-ai');
  const client = HudAi.create({
    clientId: 'CLIENT_ID',
    redirectUri: 'https://omnipuppyxx.web.app'
  });
  window.location = client.getAuthorizeUri('token');
  const queryString = require('query-string');
  const parsed = queryString.parse(location.hash);
  client.setAccessToken(parsed.access_token);
  
  client.articles.get('index.html').then(article => console.log(article)).catch(err => console.log('IOException Logged :: ...', err));
  
})
  
