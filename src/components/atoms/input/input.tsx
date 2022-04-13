import { VFC } from 'react';
import { STextInput } from '../../../styled/styled';
import { TypeInput } from '../../../types/atomsTypes';

export const Input:VFC<TypeInput> = (props) => {
  const {name,  placeholder = "" } = props;
  return (
    <STextInput type="text" name={name} placeholder={placeholder} />
  )
}

