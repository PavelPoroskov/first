import React from "react";
import { Button, TextInput, Row, Col } from "react-materialize";
import { withFormik } from "formik";
import { string as yup_string, object as yup_object } from "yup";

const styles ={
  msgerror: {
    color: 'red'
  }
}

const AddGameView = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <Row>
      <TextInput
        label="New Game Title"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
        // type='text'
        name="title"
        autoComplete="off"
        spellCheck="false"
        s={12}
        m={10}
        l={10}
      >
        {errors.title && touched.title && <div id="feedback" style={styles.msgerror}>{errors.title}</div>}
      </TextInput>

      <Col
        m={2}
        l={2}
        className="hide-on-small-only"
        style={{ marginTop: "1rem" }}
      >
        <Button type='submit' style={{ width: "100%" }}>Add</Button>
      </Col>

      <Col s={12} className="hide-on-med-and-up">
        <Button type='submit' style={{ width: "100%" }}>Add</Button>
      </Col>
    </Row>
  </form>
);

export default withFormik({
  mapPropsToValues: (props) => {
    return {
      title: ''
    }
  },  
  handleSubmit: (values,formikBag) => {
    // formikBag.props.onAddGame(values.title)
    // formikBag.resetForm({title: ''})

    const res = formikBag.props.onAddGame(values.title)
    if (res.success) {
      formikBag.resetForm({title: ''})
    }else{
      formikBag.setFieldError ( 'title', res.msg )
    }
  },
  validationSchema: yup_object().shape({
    title: yup_string().trim().required("Title is required.")
  }),
  validateOnBlur: false,
  displayName: 'AddGameForm',
})(AddGameView);
