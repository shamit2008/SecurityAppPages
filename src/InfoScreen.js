import React, { Component } from 'react';
import './App.css';
import btn_icon_back_info from './images/btn_icon_back_info.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class InfoScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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

  onClick_elHotspot = async () => {
    // Go to screen 'Home'
    this.props.appActions.goToScreen('home', { transitionId: 'fadeIn' });
  
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
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText7 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText3 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText5 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elText6 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    // eslint-disable-next-line no-unused-vars
    const style_elText6_inner = {
      textAlign: 'center',
     };
    
    const style_elHotspot = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen InfoScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{this.props.locStrings.info_text_294234}</div>
            </div>
          </div>
          
          <div className="elText7">
            <div className="baseFont" style={style_elText7}>
              <div>{this.props.locStrings.info_text7_599168}</div>
            </div>
          </div>
          
          <div className="elText3">
            <div className="baseFont" style={style_elText3}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.info_text3_252590.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          <div className="elText5">
            <div className="baseFont" style={style_elText5}>
              <div>{this.props.locStrings.info_text5_177104}</div>
            </div>
          </div>
          
          <div className="elText2">
            <div className="baseFont" style={style_elText2}>
              <div>{this.props.locStrings.info_text2_136248}</div>
            </div>
          </div>
          
          <div className="elSpacer">
            <div />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Info</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_info} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="baseFont elText6" style={style_elText6}>
              <div className="bottomAlignedContent">{this.props.locStrings.info_text6_519256}</div>
            </div>
            <div className="actionFont containerMinHeight elHotspot" style={style_elHotspot} onClick={this.onClick_elHotspot}  />
          </div>
        </div>
      </div>
    )
  }
  
}
