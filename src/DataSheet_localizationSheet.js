// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_688206";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_502855";
    item['en'] = "Website Security Scanner";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_text2_229629";
    item['en'] = "Enter a website:";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_field_442316";
    item['en'] = "www.example.com";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_button_234835";
    item['en'] = "SUBMIT";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_button2_79823";
    item['en'] = "Info";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_text3_948447";
    item['en'] = "Info";
    
    item = {};
    this.items.push(item);
    item['key'] = "info_text_294234";
    item['en'] = "How this site works";
    
    item = {};
    this.items.push(item);
    item['key'] = "info_text2_136248";
    item['en'] = "4. Google Safety Checker. Google has a safety checker, which is super simple to use and it is one of the easiest ways to get a brief checking of the website.";
    
    item = {};
    this.items.push(item);
    item['key'] = "info_text3_252590";
    item['en'] = "2. Cookies. Cookies are little bits of information that are stored and then sent to the server about the user. \n";
    
    item = {};
    this.items.push(item);
    item['key'] = "info_text4_1004406";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "info_text5_177104";
    item['en'] = "3. Ads. The number of ads is not the best indicator of how safe a website is, but is still fairly useful.";
    
    item = {};
    this.items.push(item);
    item['key'] = "info_text6_519256";
    item['en'] = "Developed by Shaurya Mittal uisng React and JSX";
    
    item = {};
    this.items.push(item);
    item['key'] = "info_text7_599168";
    item['en'] = "1. OpenWPM - The main way we check web security is through a web-crawler called openwpm. This web crawler internally runs the website and then tracks the data pulls.";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_text3_554928";
    item['en'] = "Developed by Shaurya Mittal using React and JSX";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_validator_755553";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_text4_110877";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_field_889680";
    item['en'] = "www.example.com";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_text4_464719";
    item['en'] = "if u see this then booo";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_textblock_101429";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_button_588602";
    item['en'] = "SUBMIT";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
