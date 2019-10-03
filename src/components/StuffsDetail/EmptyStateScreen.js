/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const EmptyStateScreen = () => (
  <div
    class="EMPTYSTATE"
    css={css`
      grid-area: main;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
    `}
  >
    SUCKA
  </div>
);

export default EmptyStateScreen;
