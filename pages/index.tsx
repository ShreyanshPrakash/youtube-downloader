import { APP_CONFIG } from "config";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import styled from "styled-components";

interface IndexProps {}

const IndexWrapper = styled.div``;

const Index: FC<IndexProps> = (props: IndexProps) => {
  const router = useRouter();

  useEffect(() => {
    router.push(APP_CONFIG?.basePagePath);
  }, []);

  return <IndexWrapper></IndexWrapper>;
};

export default Index;
