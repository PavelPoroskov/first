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
        s={12}
        m={10}
        l={11}
      >
        {errors.title && touched.title && <div id="feedback" style={styles.msgerror}>{errors.title}</div>}
      </TextInput>

      <Col
        m={2}
        l={1}
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
    // console.log(values)
    // console.log(formikBag)
    formikBag.props.onAddGame(values.title)
    formikBag.resetForm({title: ''})

    // formikBag.props.addGame(values.title)
    // if success
    //    formikBag.resetForm()
  },
  validationSchema: yup_object().shape({
    title: yup_string().required("Title is required.")
  }),
  validateOnBlur: false,
  displayName: 'AddGameForm',
})(AddGameView);
