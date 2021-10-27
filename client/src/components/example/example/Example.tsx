import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getExample } from "../../../app/actions/example";
import { IExample } from "../../../app/models/example";

interface IProps {
  getExample: any;
  example: {
    example: IExample;
    loadingExample: boolean;
  };
  match: any
}

const Example: React.FC<IProps> = ({
  getExample,
  example: { example, loadingExample },
  match
}) => {
  useEffect(() => {
    getExample(match.params.id);
  }, [getExample, match.params.id]);


  if (loadingExample) return <p>Loading</p>; 
  return (
    <Fragment>
      <div>
        <p>{example._id}</p>
        <p>{example.name}</p>
        <p>{example.file}</p>
        <p>{example.integer}</p>
        <p>{example.number}</p>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  example: state.example,
});

export default connect(mapStateToProps, { getExample })(Example);
