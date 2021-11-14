/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getExamples, delExample } from "../../../app/actions/example";
import { openModal } from "../../../app/actions/modal";
import { IExample } from "../../../app/models/example";

import LoadingPage from "../../layout/LoadingPage";
import { history } from "../../layout/App";
import Confirmation from "../../common/modals/Confirmation";

interface IProps {
  getExamples(): Promise<void>;
  delExample(id: string): Promise<void>;
  openModal(content: any): void;
  example: {
    examples: IExample[];
    loading: boolean;
  };
}

//Example
const Examples: React.FC<IProps> = ({
  openModal,
  getExamples,
  delExample,
  example: { examples, loading },
}) => {
  useEffect(() => {
    getExamples();
  }, [getExamples]);

  const delHandler = (e: any, id: string) => {
    e.stopPropagation();
    openModal(
      <Confirmation
        header={`DELETE`}
        content={<p>{`Do yo want to delete this item ?`}</p>}
        action={() => delExample(id).then(() => getExamples())}
        loading={loading}
        disable={loading}
      />
    );
  };

  if (loading) return <LoadingPage></LoadingPage>;

  return (
    <Fragment>
      <div className="app-container">
        <div className="examples-container">
          <div className="examples-wrapper">
            <Link className="btn-main" to="/new-example">
              Create
            </Link>
            {examples.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>name</th>
                    <th>value</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>
                  {examples.map((example: IExample) => (
                    <tr
                      key={example._id}
                      onClick={() =>
                        history.push(`/edit-example/${example._id}`)
                      }
                    >
                      <td>{example.name}</td>
                      <td>{example.integer}</td>
                      <td>
                        <a
                          className="del-btn"
                          onClick={(e) => delHandler(e, example._id)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h1>No Example found</h1>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  example: state.example,
});

export default connect(mapStateToProps, { getExamples, delExample, openModal })(
  Examples
);
