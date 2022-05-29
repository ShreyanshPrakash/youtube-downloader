import React, { ChangeEvent, FC, FormEvent, Ref } from 'react';
import styled from 'styled-components';

interface IFormWrapper{

}
const FormWrapper = styled.form<IFormWrapper>``;

interface IForm{
    children: any,
    onChange?: (event: FormEvent<HTMLFormElement>) => void;
    onSubmit?: (event: ChangeEvent<HTMLFormElement>) => void;
    formRef?: any;
}
export const Form: FC<IForm> = (props) => {
    const { children, formRef, onChange, onSubmit } = props;
    return (    
        <FormWrapper {...props} ref={formRef} onChange={onChange} onSubmit={onSubmit}>
            {children}
        </FormWrapper>
    )
}