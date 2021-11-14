import React from "react";

interface IProps {
  action: any;
  loading: boolean;
  disable: boolean;
  css: string;
  text: string;
  i?: JSX.Element;
}
const A: React.FC<IProps> = ({ loading, disable, css, text, i, action }) => {
  const spinner = <i className="fas fa-circle-notch fa-spin"></i>;
  const outputCss = loading || disable ? css + " disabled" : css;

  return (
    <a className={outputCss} onClick={action}>
      {loading ? spinner : i}
      {text}
    </a>
  );
};

export default A;
