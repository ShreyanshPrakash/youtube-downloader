import React, {
  FC,
  ReactElement,
} from "react";
import styled from "styled-components";
import { ActiveDownloads, SearchSection } from "components";

const HomeWrapper = styled.div`
  padding: 24px;
`;

interface IHomeProps {}

const Home: FC<IHomeProps> = (): ReactElement => {
  return (
    <HomeWrapper>
      <SearchSection />
      <ActiveDownloads />
    </HomeWrapper>
  );
};

export default Home;
