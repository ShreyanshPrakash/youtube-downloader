import { StyledContainer, StyledNavLink } from "uiLibrary/StyledComponents";
import { APP_CONFIG } from "config";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

const NavigationHeaderWrapper = styled.div`
  padding: 16px;

  display: flex;
  justify-content: space-between;
  background-color: #15156b;

  .nav-links {
    display: flex;
  }
`;

export const NavigationHeader: FC<{}> = () => {
  return (
    <NavigationHeaderWrapper>
      <StyledContainer>
        <StyledNavLink color="white">
          <Link href={APP_CONFIG?.rootPath}>
            youtube downloader
          </Link>
        </StyledNavLink>
      </StyledContainer>
      <StyledContainer display="flex">
        {APP_CONFIG?.HEADER_NAV_CONFIG.map((item) => {
          const { label, link } = item;
          return (
            <StyledNavLink key={label} color="white">
              <Link key={label} href={link}>
                {label}
              </Link>
            </StyledNavLink>
          );
        })}
      </StyledContainer>
    </NavigationHeaderWrapper>
  );
};
