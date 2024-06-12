import styled from "styled-components";


export const FormPanel = styled.div` 
  justify-content: space-between; 
  display: flex; 
  width: 100%; 
  align-items: center; 
  margin-top: 16px; 
  padding: 30px; 
  border-radius: 4px; 
  background: #fff; 
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.04); 
  flex-direction: column;
`;

export const FieldPanel = styled(FormPanel)` 
  display: 'grid'; 
  grid-template-columns: 1fr; 
  grid-column-gap: 30px; 
  grid-row-gap: 30px; 
  justify-content: start; 
 
  ${(props) => props.theme.media.tablet ? `grid-template-columns: 1fr 1fr;` : ''}
  ${(props) => props.theme.media.desktop ? `grid-template-columns: 1fr 1fr;` : ''}
 
  .w-full { 
    grid-column: span 2; 
  } 
`;

export const FieldPanelFullWidth = styled(FieldPanel)` 
  grid-template-columns: 1fr; 
  grid-row-gap: 30px; 
`;

export const LabelGroup = styled.div` 
  font-family: Inter; 
  font-size: 14px; 
  font-style: normal; 
  font-weight: 400; 
  line-height: normal;
  display: flex; 
  align-self: auto; 
  align-items: center; 
  margin: 0rem 1rem 0.5rem 0; 
`;

export const StyledInput = styled.input` 
  padding: 1rem; 
  border: 1px solid 
    ${(props) => (props.disabled ? props.theme.colors.elementsFilledInput : props.theme.colors.elementsInputBorder)}; 
  border-radius: 2px; 
  margin: 0; 
  height: 44px; 
 
  &:focus { 
    border-color: ${(props) => (props.disabled ? 'transparent' : props.theme.colors.primaryOrange)}; 
  } 
 
  &:focus-visible { 
    outline: 2px solid 
      ${(props) => (props.disabled ? props.theme.colors.elementsInputBorder : props.theme.colors.primaryOrange)}; 
  } 
 
  &:hover { 
    border-color: ${(props) => (props.disabled ? 'transparent' : props.theme.colors.primaryOrange)}; 
  } 
 
  background-color: ${(props) => 
    props.disabled ? props.theme.colors.elementsFilledInput : props.theme.colors.primaryWhite}; 
  color: ${(props) => (props.disabled ? props.theme.colors.primaryBlack70 : props.theme.colors.black)}; 
 
  font-family: Inter; 
  font-size: 14px; 
  font-style: normal; 
  font-weight: 400; 
  line-height: normal;
`;