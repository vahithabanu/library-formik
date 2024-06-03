


import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ addAuthor, editAuthor, editingAuthor, setEditingAuthor }) => {
  const initialValues = {
    name: '',
    birthDate: '',
    biography: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required'),
  });

  return (
    <div className="author-form">
      <h2>{editingAuthor ? 'Edit Author' : 'Add Author'}</h2>
      <Formik
        initialValues={editingAuthor || initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (editingAuthor) {
            editAuthor({ ...editingAuthor, ...values });
            setEditingAuthor(null);
          } else {
            addAuthor(values);
          }
          resetForm();
        }}
      >
        {({ setValues }) => {
          useEffect(() => {
            if (editingAuthor) {
              setValues(editingAuthor);
            }
          }, [editingAuthor, setValues]);

          return (
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <label htmlFor="birthDate">Birth Date</label>
                <Field type="date" id="birthDate" name="birthDate" />
                <ErrorMessage name="birthDate" component="div" />
              </div>
              <div>
                <label htmlFor="biography">Biography</label>
                <Field as="textarea" id="biography" name="biography" />
                <ErrorMessage name="biography" component="div" />
              </div>
              <button type="submit">{editingAuthor ? 'Update Author' : 'Add Author'}</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AuthorForm;
