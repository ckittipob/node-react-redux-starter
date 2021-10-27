import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProtected, delExample } from "../../../app/actions/example";
import { IExample } from "../../../app/models/example";
import LinkButton from "../../common/link/LinkButton";

interface IProps {
  getProtected: any;
  delExample: any;
  example: {
    examplesProtected: IExample[];
    loadingExamples: boolean;
  };
}

const Protected: React.FC<IProps> = ({
  getProtected,
  delExample,
  example: { examplesProtected, loadingExamples },
}) => {
  useEffect(() => {
    getProtected();
  }, [getProtected]);

  const delHandler = (id: string) => {
    delExample(id).then(() => getProtected());
  }

  if (loadingExamples) return <p>Loading</p>;

  return (
    <Fragment>
      <div>
        {/* <img src="/asset/image.jpg" alt=""/> */}
        {examplesProtected.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>file</th>
                <th>integer</th>
                <th>number</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {examplesProtected.map((example: IExample) => (
                <tr key={example._id}>
                  <td>
                    <Link to={`/example/${example._id}`}>{example.name}</Link>
                  </td>
                  <td><img src={"http://localhost:5000"+ example.file.slice(5)} height="100" alt=""/></td>
                  <td>{example.integer}</td>
                  <td>{example.number}</td>
                  <td>
                  <LinkButton to={`/edit-example/${example._id}`}>Edit</LinkButton>
                  </td>
                  <td>
                    <button onClick={() => delHandler(example._id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>No Example found</h1>
        )}
        <LinkButton to='/new-example'>Create</LinkButton>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  example: state.example,
});

export default connect(mapStateToProps, { getProtected, delExample })(Protected);
