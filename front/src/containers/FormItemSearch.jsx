import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class FormItemSearch extends Component {
  render() {
  const { handleSubmit, pristine, reset, submitting } = this.props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
          />
        </div>
      </div>
      <div>
        <label>Location</label>
        <div>
          <Field
            name="location"
            component="input"
            type="text"
            placeholder="Location"
          />
        </div>
      </div>
      <div>
        <label>Price</label>
        <div>
          <Field
            name="price"
            component="input"
            type="text"
            placeholder="Price"
          />
        </div>
      </div>
      <div>
        <label>Category</label>
        <div>
          <Field name="category" component="select">
            <option />
            <option value="multimedia">Multimédia</option>
            <option value="loisirs">Loisirs</option>
            <option value="maison">Maison</option>
            <option value="jeux">Jeux / Jouets</option>
            <option value="electromenage">Eléctroménagé</option>
            <option value="autres">Autres</option>
          </Field>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}
}

export default reduxForm({
  form: 'FormItemSearch' // a unique identifier for this form
})(FormItemSearch)
