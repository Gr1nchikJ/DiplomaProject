import { StyledInput } from './Styled.components';
import SmartLabel from './SmartLabel';
import React from 'react';
 
const WizardTextInputComponent = ({ 
  label, 
  tooltip, 
  tooltipPosition, 
  labelStyle, 
  name, 
  value, 
  onChanged, 
  disabled, 
  style, 
  placeholder, 
  type, 
  required, 
  error, 
  ...props 
}) => { 
  return ( 
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}> 
      {label && ( 
        <SmartLabel 
          label={label} 
          required={required} 
          labelStyle={labelStyle} 
          tooltip={tooltip} 
          tooltipPosition={tooltipPosition} 
          hasValue={!!value} 
          error={error} 
        /> 
      )} 
      <StyledInput 
        {...props} 
        style={style} 
        type={type} 
        defaultValue={value} 
        onBlur={(e) => { 
          e.currentTarget.value !== value && onChanged(name, e.currentTarget.value); 
        }} 
        disabled={disabled} 
        placeholder={placeholder} 
      /> 
    </div> 
  ); 
}; 
 
export default WizardTextInputComponent;