import React from "react";
import * as Yup from "yup";
import FormSelect from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik, Formik, Form, Field } from "formik";
import "./index.css";
import TextField from "../../TextField";

const initialValues = {
  firstName: "",
  lastName: "",
  street: "",
  postal: "",
  city: "",
  email: "",
  phone_number: "",
  birthday: {
    day: "",
    month: "",
    year: "",
  },
  comment: "",
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Register = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    street: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("street is required"),
    postal: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("postal is required"),
    city: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("city is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    comment: Yup.string()
      .max(40, "Must be 40 characters or less")
      .required("comment is required"),
  });

  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let minOffset = 0,
    maxOffset = 10;
  let thisYear = new Date().getFullYear();
  let allYears = [""];
  for (let x = minOffset; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }

  const yearList = allYears.map((x) => {
    return <option key={x}>{x}</option>;
  });

  const THIS_YEAR = +new Date().getFullYear();
  const THIS_MONTH = +new Date().getMonth() + 1;

  const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
    const months30 = [4, 6, 9, 11];
    const leapYear = year % 4 === 0;
    return month === 2
      ? leapYear
        ? 29
        : 28
      : months30.includes(month)
      ? 30
      : 31;
  };
  const monthList = [""];
  const List = Array.from(
    new Array(getMonthDays()),
    (val, index) => getMonthDays() - index
  );
  monthList.push(List);

  return (
    <>
      <div className="register-block">
        <div className="text-section">
          <h1 className="title-section">Form</h1>
        </div>
      </div>
      <div className="pt-4">
        <div className="mt-5 col-md-12">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log({ values });
            }}
          >
            {(formik) => (
              <div>
                <Container className="p-5">
                  <Form>
                    <Row className="mb-3">
                      <Col>
                        <label className="mb-2">Choose region</label>
                        <FormSelect.Select
                          aria-label="Select Region"
                          className="form-control"
                        >
                          <option value=""> Please Select </option>
                          <option selected="" value="Africa">
                            {" "}
                            Africa{" "}
                          </option>
                          <option value="Asia"> Asia </option>
                          <option value="Australia"> Australia </option>
                          <option value="USA "> USA </option>
                          <option value="Canada"> Canada </option>
                          <option value="EU"> EU </option>
                          <option value="UK"> UK </option>
                          <option value="South America"> South America </option>
                          <option value="Nordic Region"> Nordic Region </option>
                          <option value="Others"> Others </option>
                        </FormSelect.Select>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextField
                          name="firstName"
                          type="text"
                          label="First Name"
                        />
                      </Col>
                      <Col>
                        <TextField
                          name="lastName"
                          type="text"
                          label="Sur Name"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextField name="street" type="text" label="Street" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextField
                          name="postal"
                          type="text"
                          label="Postal Number"
                        />
                      </Col>
                      <Col>
                        <TextField name="city" type="text" label="City" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextField name="email" type="email" label="Email" />
                      </Col>
                      <Col>
                        <TextField
                          name="phone_number"
                          type="email"
                          label="Phone number"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <label>Birthday</label>
                      <Col>
                        <FormSelect.Select
                          aria-label="Select Region"
                          className="form-control"
                        >
                          {monthList
                            .flat()
                            .sort((a, b) => {
                              return a - b;
                            })
                            .map((day) => {
                              return <option value={day}>{day}</option>;
                            })}
                        </FormSelect.Select>
                        <label>Day</label>
                      </Col>
                      <Col>
                        <FormSelect.Select
                          aria-label="Select Region"
                          className="form-control"
                          id="month"
                        >
                          {months.map((month) => {
                            return <option value={month}>{month}</option>;
                          })}
                        </FormSelect.Select>
                        <label>Month</label>
                      </Col>
                      <Col>
                        <FormSelect.Select
                          aria-label="Select Region"
                          className="form-control"
                          id="year"
                        >
                          {yearList}
                        </FormSelect.Select>
                        <label>Year</label>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <label>Comment / PGA status / Tour membership </label>
                        <textarea className="form-control" />
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <button
                          className="btn btn-primary form-control mt-5"
                          type="submit"
                        >
                          Send
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </Container>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
