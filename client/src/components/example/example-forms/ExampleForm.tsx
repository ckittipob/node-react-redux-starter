import React, { useState, useEffect } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { history } from "../../layout/App";
import { connect } from "react-redux";
import {
  getExample,
  createExample,
  editExample,
} from "../../../app/actions/example";
import {
  combineValidators,
  isRequired,
  isNumeric,
  composeValidators,
} from "revalidate";
import {
  ExampleFormValues,
  IExample,
  IExampleFormValues,
} from "../../../app/models/example";
import NumberInput from "../../common/form/NumberInput";
import TextInput from "../../common/form/TextInput";
import LoadingPage from "../../layout/LoadingPage";

// Validate Form Field
const validate = combineValidators({
  name: isRequired({ message: "The event title is required" }),
  integer: composeValidators(
    isNumeric({ message: "Must be Integer" }),
    isRequired({ message: "The event title is required" })
  )()
});

interface IProps {
  match: any;
  getExample(id: string): any;
  createExample(example: IExampleFormValues): any;
  editExample(example: IExampleFormValues): any;
  exampleStore: {
    example: IExample;
    loadingExample: boolean;
    submittingExample: boolean;
  };
}

const ExampleForm: React.FC<IProps> = ({
  match,
  getExample,
  createExample,
  editExample,
  exampleStore: { example, loadingExample, submittingExample },
}) => {
  const [exampleState, setExampleState] = useState(new ExampleFormValues());
  const [loading, setLoading] = useState(false); // Loading Form (not implemented yet !!)

  useEffect(() => {
    if (match.params.id) {
      setLoading(true);
      getExample(match.params.id)
        .then((e: any) => setExampleState(e))
        .finally(() => setLoading(false));
    }
  }, [getExample, createExample, editExample, match.params.id]);

  const handleFinalFormSubmit = (values: any) => {
    const { ...example } = values;
    if (!example._id) {
      let newExample: IExampleFormValues = {
        ...example,
      };
      createExample(newExample)
        .then()
        .finally(() => history.push("/examples"));
    } else {
      editExample(example)
        .then()
        .finally(() => history.push("/examples"));
    }
  };

  if (loading) return <LoadingPage></LoadingPage>;
  else {
    return (
      <div className="app-container">
        <div className="example-form-container">
          <div className="example-wrapper">
          <FinalForm
          validate={validate}
          initialValues={exampleState}
          onSubmit={handleFinalFormSubmit}
          render={({
            handleSubmit,
            submitting, // Loading Button (not implemented yet !!)
            submitError, // Handle with ErrorMessage Component
            invalid,
            pristine,
            dirtySinceLastSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              {loadingExample && <p>Loading</p>}
              <Field name="name">
                {({ input, meta }) => (
                  <TextInput
                    label="Name"
                    input={input}
                    meta={meta}
                    placeholder="Name"
                  />
                )}
              </Field>
              <Field name="integer">
                {({ input, meta }) => (
                  <NumberInput
                    label="Value"
                    input={input}
                    meta={meta}
                    placeholder="Value"
                  />
                )}
              </Field>
              <input
                className="btn-main"
                disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                type="submit"
                value="Submit"
              />
            </form>
          )}
        />
          </div>
        </div>

      </div>
    );
  }
};

const mapStateToProps = (state: any) => ({
  exampleStore: state.example,
});

export default connect(mapStateToProps, {
  getExample,
  createExample,
  editExample,
})(ExampleForm);
