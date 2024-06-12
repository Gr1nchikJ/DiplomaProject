import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primeflex/primeflex.css"; // css utility
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import { ThemeProvider } from 'styled-components';

const theme = {
  media: {
    tablet: 'only screen and (min-width: 768px)',
    desktop: 'only screen and (min-width: 1024px)',
    
  },
  colors: {
    lightGray: '#eeeeee', 
    gray: 'rgb(217,218,219)', 
    mediumGrey: '#b6b6b6', 
    darkGray: 'rgb(142,142,142)', 
    lightGreen: 'rgb(165, 204, 178)', 
    green: 'rgb(101, 133, 108)', 
    mediumGreen: 'rgb(19,95,81)', 
    lightOrange: '#EB7342', 
    orange: 'rgb(231,81,19)', 
    darkOrange: '#cf4811', 
    driedGreen: 'rgb(108,140,116)', 
    darkKhaki: '#CACF85', 
    shadedRed: '#E65F5C', 
    black: '#000000', 
    regionColorLight: 'rgb(165, 204, 178)', 
    regionColor: 'rgb(101, 133, 108)', 
    regionColorMedium: 'rgb(19,95,81)', 
    regionColorDark: '#000000', 
    button: 'rgb(231, 81, 19)', 
    buttonHover: '#EB7342', 
    toolBoxImageFilter: 'invert() brightness(0.2) sepia(1) hue-rotate(120deg) saturate(7);', 
  
    // toolkit 
    // primary 
    primaryBlack: '#151515', 
    primaryBlack50: 'rgba(21, 21, 21, 0.5);', 
    primaryBlack70: 'rgba(21, 21, 21, 0.7);', 
    primaryBlack80: 'rgba(21, 21, 21, 0.8);', 
    primaryWhite: '#FFFFFF', 
    primaryOrange: '#E75113', 
    primaryOrange01: 'rgba(231, 81, 19, 0.1)', 
    primaryGreen: '#1E6052', 
    // secondary 
    secondaryMiddleGreen: '#6F896A', 
    secondaryLightGreen: '#B4D0B6', 
    secondaryLightGreen30: 'rgba(180, 208, 182, 0.3);', 
    secondaryGray: '#D9DADB', 
    // system status 
    systemStatusError: '#E20238', 
    systemStatusSuccess: '#02C038', 
    systemStatusAttention: '#F5DD00', 
    systemStatusUnknown: '#EBECF4', 
    // status labels 
    statusLabelRedText: '#DA605B', 
    statusLabelRedBg: '#FCF4F7', 
    statusLabelYellowText: '#B26A2A', 
    statusLabelYellowBg: '#FFECB1', 
    statusLabelGreenText: '#1E6052', 
    statusLabelGreenBg: '#E2EBE3', 
    statusLabelGrayText: '#7F8081', 
    statusLabelGrayBg: '#E3E3E3', 
    statusLabelBlueText: '#223B60', 
    statusLabelBlueBg: '#EBF9FF', 
    // elements 
    elementsButtonHover: '#FA8656', 
    elementsButtonDisabled: '#757575', 
    elementsFilledInput: '#F3F4FB', 
    elementsInputBorder: '#E0E0E0', 
    elementsTableRow: '#F9F9FF', 
    elementsDropDown: '#EAEAED', 
    elementDropdownSelectedDisabled: '#495057'
  }
  // Add other theme properties as necessary
};


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
