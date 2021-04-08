import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries'

export const Content = styled.div`
position: relative;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  ${mediaQueries.small} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${mediaQueries.medium} {
    width: 89.5%;
    padding-right: 0;
    padding-left:0;
    margin-left: auto;
    margin-right: auto;
  }
  ${mediaQueries.large} {
    max-width: 68.75rem;
  }`;