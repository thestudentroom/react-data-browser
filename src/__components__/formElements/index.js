import React from 'react';
import {
  StyledCheckboxWrapper,
  StyledHiddenInput,
  StyledLabel,
} from './styles';

// todo create and import icon

export const Checkbox = props => {
  return (
    <StyledLabel>
      <StyledCheckboxWrapper
        disabled={props.disabled || false}
        align={props.align || 'center'}
        data-cy={
          props.dataCy
            ? `${props.dataCy}-${props.checked ? 'checked' : 'unchecked'}`
            : null
        }
      >
        {props.checked ? (
          <Icon color="#777">check_box</Icon>
        ) : (
          <Icon color={props.disabled ? '#CCC' : '#777'}>
            check_box_outline_blank
          </Icon>
        )}
        <StyledHiddenInput
          type="checkbox"
          id={props.id}
          checked={props.checked}
          disabled={props.disabled || false}
          onChange={props.onChange}
          data-cy={props.dataCy}
        />
        {props.children}
      </StyledCheckboxWrapper>
    </StyledLabel>
  );
};
