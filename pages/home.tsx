import { Button, Form, SearchField } from "components";
import { Divider, StyledContainer } from "components/StyledComponents";
import React, { ChangeEvent, FC, FormEvent, useRef } from "react";
import styled, { useTheme } from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  height: calc(calc(100% - 62px) - 40%);

  .download-section {
    border: 4px solid ${({ theme }) => theme?.colors?.greenLight};
    width: 45%;
    margin: auto;
    padding: 24px 0px;
    text-align: center;

    .form-container {
      justify-content: space-evenly;
    }
  }
  .info-section {
    border: 1px solid black;
  }
`;
interface IHomeProps {}
const Home: FC<IHomeProps> = () => {
  const theme = useTheme();
  const formRef:any = useRef("");

    const handleFormChange = (event: FormEvent<HTMLFormElement>) => {
        const value = (event?.target as HTMLInputElement).value;
    }

    const handleFormSubmit = (event: ChangeEvent) => {
        event.preventDefault?.();
        const form = event?.target;
        const formData = new FormData(formRef?.current);
    }

  return (
    <HomeWrapper>
      <StyledContainer className="download-section">
        <Form formRef={formRef} onChange={handleFormChange} onSubmit={handleFormSubmit}>
          <StyledContainer className="form-container" display="flex">
            <SearchField type="search" name="videoLink" width={theme?.formFieldSizes?.sizeXL} />
            <Button label="Submit" />
          </StyledContainer>
        </Form>
      </StyledContainer>
      {/* <Divider margin='24px auto' width="90%"/> */}
      {/* <StyledContainer className='info-section'>
                Something else
            </StyledContainer> */}
    </HomeWrapper>
  );
};

export default Home;
