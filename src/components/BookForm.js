/*import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ addBook, editBook, editingBook, setEditingBook }) => {
  const initialValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
  });

  useEffect(() => {
    if (editingBook) {
      setValues(editingBook);
    }
  }, [editingBook]);

  return (
    <div className="book-form">
      <h2>{editingBook ? 'Edit Book' : 'Add Book'}</h2>
      <Formik
        initialValues={editingBook || initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (editingBook) {
            editBook({ ...editingBook, ...values });
            setEditingBook(null);
          } else {
            addBook(values);
          }
          resetForm();
        }}
      >
        {({ setValues }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <Field type="text" id="author" name="author" />
              <ErrorMessage name="author" component="div" />
            </div>
            <div>
              <label htmlFor="isbn">ISBN</label>
              <Field type="text" id="isbn" name="isbn" />
              <ErrorMessage name="isbn" component="div" />
            </div>
            <div>
              <label htmlFor="publicationDate">Publication Date</label>
              <Field type="date" id="publicationDate" name="publicationDate" />
              <ErrorMessage name="publicationDate" component="div" />
            </div>
            <button type="submit">{editingBook ? 'Update Book' : 'Add Book'}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
*/



/*import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ addBook, editBook, editingBook, setEditingBook }) => {
  const initialValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
  });

  return (
    <div className="book-form">
      <h2>{editingBook ? 'Edit Book' : 'Add Book'}</h2>
      <Formik
        initialValues={editingBook || initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (editingBook) {
            editBook({ ...editingBook, ...values });
            setEditingBook(null);
          } else {
            addBook(values);
          }
          resetForm();
        }}
      >
        {({ setValues }) => {
          useEffect(() => {
            if (editingBook) {
              setValues(editingBook);
            }
          }, [editingBook, setValues]);

          return (
            <Form>
              <div>
                <label htmlFor="title">Title</label>
                <Field type="text" id="title" name="title" />
                <ErrorMessage name="title" component="div" />
              </div>
          
              <div>
                <label htmlFor="author">Author</label>
                <Field type="text" id="author" name="author" />
                <ErrorMessage name="author" component="div" />
              </div>
              <div>
                <label htmlFor="isbn">ISBN</label>
                <Field type="text" id="isbn" name="isbn" />
                <ErrorMessage name="isbn" component="div" />
              </div>
              <div>
                <label htmlFor="publicationDate">Publication Date</label>
                <Field type="date" id="publicationDate" name="publicationDate" />
                <ErrorMessage name="publicationDate" component="div" />
              </div>
              <button type="submit">{editingBook ? 'Update Book' : 'Add Book'}</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BookForm;*/



import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ addBook, editBook, editingBook, setEditingBook }) => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  });

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
  });

  useEffect(() => {
    if (editingBook) {
      setInitialValues(editingBook);
    } else {
      setInitialValues({
        title: '',
        author: '',
        isbn: '',
        publicationDate: '',
      });
    }
  }, [editingBook]);

  return (
    <div className="book-form">
      <h2>{editingBook ? 'Edit Book' : 'Add Book'}</h2>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (editingBook) {
            editBook({ ...editingBook, ...values });
            setEditingBook(null);
          } else {
            addBook(values);
          }
          resetForm();
        }}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" id="author" name="author" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label htmlFor="isbn">ISBN</label>
            <Field type="text" id="isbn" name="isbn" />
            <ErrorMessage name="isbn" component="div" />
          </div>
          <div>
            <label htmlFor="publicationDate">Publication Date</label>
            <Field type="date" id="publicationDate" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" />
          </div>
          <button type="submit">{editingBook ? 'Update Book' : 'Add Book'}</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
