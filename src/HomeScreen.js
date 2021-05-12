import React, { Component } from 'react';
import './App.css';
import btn_icon_back_home from './images/btn_icon_back_home.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Appbar from 'muicss/lib/react/appbar';

export default class HomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, webName, resultColor

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elButton = async () => {
    // Write your script here
    

    
    const dangerous = [
    'www.scetchysite.com',
    'www.reddit.com',
    'www.craiglist.com',
    'www.quora.com',
    'www.urbandictionary.com',
    'www.wikihow.com',
    'www.genius.com',
    'www.tmall.com',
    'www.tiktok.com',
    'www.macys.com',
    'www.chaturbate.com',
    'www.pornhub.com',
    'www.nordstrom.com',
    'www.baidu.com',
    'www.qq.com',
    'www.jd.com',
    'www.sina.com',
    'www.weibo.com',
    'www.xinhuanet.com',
    'www.okezone.com',
    'www.vk.com',
    'www.tianya.com',
    'www.huanqui.com',
    'www.yy.com'
    ]
    var website = document.getElementById("WebsiteTextField").value;
    const half = ['www.fb.com',
    'www.google.com',
    'www.twitter.com',
    'www.facebook.com',
    'www.instagram.com',
    'www.webkinz.com',
    'www.wikipedia.com',
    'www.yelp.com',
    'www.indeed.com',
    'www.imdb.com',
    'www.espn.com',
    'www.gamepedia.com',
    'www.yelp.com',
    'www.homedepot.com',
    'www.rottentomatoes.com',
    'www.theguardian.com',
    'www.msn.com',
    'www.foxnews.com',
    'www.allrecepies.com',
    'www.cnet.com',
    'www.retailmenot.com',
    'www.wiktionary.com',
    'www.wayfair.com',
    'www.investopedia.com',
    'www.apartments.com',
    'www.bbb.com',
    'www.macys.com',
    'www.nordstrom.com',
    'www.amazon.com',
    'www.healthway.com',
    'www.saksfifthavenue.com',
    'www.espn.com',
    'www.youtube.com',
    'www.bankofamerica.com',
    'www.senorwooly.com',
    'www.minecraft.net',
    'www.hypixel.net',
    'www.glutenfreeonashoestring.com',
    'www.wattpad.com'
    ]
    
    

    website = website.toLowerCase();

    const userArray = website.split('.');
    if (userArray.length !== 3 || userArray [0] !== ['www']){
      document.getElementById("resultTextId").innerHTML = "This is not in the valid format. (www.examplesite.com)"
      document.getElementById("resultTextId").style.color = "red"
      document.getElementById("resultTextId").style.textAlign = "center"
    }
    if (website = 'www.example.com'){
      document.getElementById("resultTextId").innerHTML = "You didn't write anything"
      document.getElementById("resultTextId").style.color = "red"
      document.getElementById("resultTextId").style.textAlign = "center"
    }
    else if (dangerous.includes(website)){
    	document.getElementById("resultTextId").innerHTML = "This site is not secure. Please refrain from using it."
      document.getElementById("resultTextId").style.color = "red"
      document.getElementById("resultTextId").style.textAlign = "center"
      	
    }
    else if (half.includes(website)){
      document.getElementById("resultTextId").innerHTML = "This site is secure, but contains data tracking. For any minors, please exercise caution while using."
      document.getElementById("resultTextId").style.color = "darkgoldenrod"
      document.getElementById("resultTextId").style.textAlign = "center"
    
    }
    else{
      document.getElementById("resultTextId").innerHTML = "This site is safe!"
      document.getElementById("resultTextId").style.color = "green"
      document.getElementById("resultTextId").style.textAlign = "center"
    }
    
    return null;
  
  }
  
  
  textInputChanged_elField = (event) => {
    this.setState({field: event.target.value});
    
    this.props.appActions.updateDataSlot("ds_websiteField", event.target.value);
  }
  
  getValue_elField = () => {
    return this.state.field !== undefined ? this.state.field : (this.props.webName);
  }
  
  onClick_elHotspot = async () => {
    // Go to screen 'Info'
    this.props.appActions.goToScreen('info', { transitionId: 'slideIn_right' });
  
  }
  
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_elText = {
      fontSize: 27.5,
      color: 'black',
      textAlign: 'center',
     };
    const style_elText2 = {
      fontSize: 21.8,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elButton = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elField = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elResultText = {
      color: this.props.resultColor,
      textAlign: 'left',
     };
    
    const style_elHotspot = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elText3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    // eslint-disable-next-line no-unused-vars
    const style_elText3_inner = {
      textAlign: 'center',
     };
    
    return (
      <div className="AppScreen HomeScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elSpacer">
            <div />
          </div>
          
          <div className="elText">
            <div className="systemFontBold" style={style_elText}>
              <div>{this.props.locStrings.start_text_502855}</div>
            </div>
          </div>
          
          <div className="elText2">
            <div className="systemFontRegular" style={style_elText2}>
              <div>{this.props.locStrings.home_text2_229629}</div>
            </div>
          </div>
          
          <div className="elButton">
            <Button type="submit" className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.home_button_234835}
            </Button>
          </div>
          
          <div className="elField">
            <Input id="WebsiteTextField" className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.home_field_889680} onChange={this.textInputChanged_elField} value={this.getValue_elField()}  />
          </div>
          <h3 id = "resultTextId" value = {this.props.locStrings.home_text4_464719}>
          </h3>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Home</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_home} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="actionFont containerMinHeight elHotspot" style={style_elHotspot} onClick={this.onClick_elHotspot}  />
            <div className="baseFont elText3" style={style_elText3}>
              <div className="bottomAlignedContent">{this.props.locStrings.home_text3_554928}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
