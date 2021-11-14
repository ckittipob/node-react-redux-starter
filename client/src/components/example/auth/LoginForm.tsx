import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { connect } from "react-redux";
import { login } from "../../../app/actions/auth";
import { isRequired, combineValidators } from "revalidate";
import { IUserFormValues } from "../../../app/models/user";
import TextInput from "../../common/form/TextInput";
import ErrorMessage from "../../common/form/ErrorMessage";
import { FORM_ERROR } from "final-form";
import { history } from '../../layout/App';

// Validate Form Field
const validate = combineValidators({
  email: isRequired({ message: "The event title is required" }),
  password: isRequired({ message: "The event title is required" }),
});

interface IProps {
  login(user: IUserFormValues): any;
  isAuthenticatedStore: any;
}

const LoginForm: React.FC<IProps> = ({ login, isAuthenticatedStore }) => {
  if (isAuthenticatedStore) {
    history.push('/');
  }

    return (
      <div className="login-container">
        <div className="login-content">
          <h2>LOGIN</h2>
          <FinalForm
            validate={validate}
            onSubmit={(values: IUserFormValues) =>
              login(values).catch((error: any) => ({
                [FORM_ERROR]: error,
              }))
            }
            render={({
              handleSubmit,
              submitting, // Loading Button (not implemented yet !!)
              submitError, // Handle with ErrorMessage Component
              invalid,
              pristine,
              dirtySinceLastSubmit,
            }) => (
              <form className="login-form" onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <TextInput
                    type="text"
                      label="Email"
                      input={input}
                      meta={meta}
                      placeholder="Email"
                    />
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <TextInput
                      type="password"
                      label="Password"
                      input={input}
                      meta={meta}
                      placeholder="Password"
                    />
                  )}
                </Field>
                {submitError && (
                  <ErrorMessage text="Login fail" error={submitError} />
                )}
                <input
                  disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                  type="submit"
                  value="login"
                  className="btn-main"
                />
              </form>
            )}
          />
        </div>
      </div>
    );
  
};

const mapStateToProps = (state: any) => ({
  isAuthenticatedStore: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  login,
})(LoginForm);