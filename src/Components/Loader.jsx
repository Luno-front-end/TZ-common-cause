import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
const override = css``;
export default function Loader() {
  return (
    <div className="qweqwe">
      <MoonLoader color="#000000" css={override} size={150} />
    </div>
  );
}
