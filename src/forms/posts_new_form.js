import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const validate = values => {
  const errors = {};

  if (!values.title){
    errors.title = 'can\'t be blank';
  }
  if (!values.categories){
    errors.categories = 'can\'t be blank';
  }
  return errors;
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className={`form-group ${touched && error ? 'text-danger has-danger' : ''}`}>
    <label>{label}</label>
    <div>
      <input {...input} className="form-control" placeholder={label} type={type} />
      {touched &&
        (error && <div className="invalid-feedback">{label} {error}</div>)}
    </div>
  </div>
)

let PostsNewForm = (props) => {
  const { handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field name="title" type="text" component={renderField} className="form-control" label="Title" />
      </div>
      <div className="form-group">
        <Field name="categories" type="text" component={renderField} className="form-control" label="Categories" />
      </div>
      <div className="form-group">
        <label>Content</label>
        <Field name="content" type="text" component="textarea" className="form-control" label="Content"/>
      </div>

      <Link to="/" className="btn btn-danger">Cancel</Link>
      <button type="submit" className="btn btn-primary pull-right" disabled={submitting}>Save</button>
    </form>
  )
}

PostsNewForm = reduxForm({
  form: 'PostsNewForm',
  validate
})(PostsNewForm);

export default PostsNewForm;
