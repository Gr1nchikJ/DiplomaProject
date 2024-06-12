import React from 'react'; 
import styled, { css } from 'styled-components'; 
 
import {StatusAttentionIcon} from './icons'
 
const TooltipErrorIcon = ({ content, position }) => { 
  if (!content || typeof content === 'boolean') { 
    return <StatusAttentionIcon />; 
  } 
 
  return ( 
    <TooltipContainer data-pr-position={position || 'bottom'} style={{ marginLeft: '4px' }}> 
      <div className="tooltip-trigger" style={{ display: 'flex', alignItems: 'end' }}> 
        <StatusAttentionIcon /> 
      </div> 
      <div className="tooltip-content" data-tooltip={content}></div> 
    </TooltipContainer> 
  ); 
}; 
 
const TooltipContainer = styled.span` 
  position: relative; 
  margin-left: 0.5rem; 
  cursor: pointer; 
 
  & .tooltip-content::before { 
    content: attr(data-tooltip); 
    position: absolute; 
    color: #fff; 
    padding: 5px; 
    border-radius: 4px; 
    transition: opacity 0.3s; 
    left: auto; 
    right: auto; 
    transform: translateX(-50%); 
 
    ${(props) => 
      props['data-pr-position'] && 
      props['data-pr-position'].includes('top') && 
      css` 
        bottom: 110%; 
        top: auto; 
      `} 
 
    ${(props) => 
      props['data-pr-position'] && 
      props['data-pr-position'].includes('bottom') && 
      css` 
        top: 2rem; 
      `} 
 
      ${(props) => 
      props['data-pr-position'] && 
      props['data-pr-position'].includes('left') && 
      css` 
        transform: translate(-100%, 0); 
      `} 
       
      ${(props) => 
      props['data-pr-position'] && 
      props['data-pr-position'].includes('right') && 
      css` 
        transform: translate(1rem, 0); 
      `} 
       
      white-space: break-spaces; 
    padding: 0.5rem; 
    ${(props) => props.theme.fonts.textSmall}; 
    text-transform: initial; 
    background: ${(props) => props.theme.colors.darkGray}; 
    display: none; 
    width: max-content; 
    max-width: 15rem; 
  } 
  & .tooltip-trigger:hover + .tooltip-content::before { 
    display: initial; 
    z-index: 1; 
  } 
`; 
 
export default TooltipErrorIcon;