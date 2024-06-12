 import { LabelGroup } from './Styled.components';
import TooltipErrorIcon from '../../icons/TooltipErrorIcon'
import React from 'react';
 
const SmartLabel = ({ 
  label, 
  tooltip, 
  tooltipPosition, 
  required, 
  hasValue, 
  labelStyle, 
  boxStyle, 
  htmlFor, 
  error, 
}) => { 
  return ( 
    <LabelGroup style={boxStyle}> 
      <label htmlFor={htmlFor} style={labelStyle}> 
        {label} 
      </label> 
      {(error || (required && !hasValue)) && <TooltipErrorIcon content={error} />} 
    </LabelGroup> 
  ); 
}; 
 
export default SmartLabel;