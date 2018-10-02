import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as api from "../../api";

import LoginView from '../../components/LoginView'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      doLogin: (user, pass) => api.doLogin(user, pass)
    },
    dispatch
  );

const Login = connect(
  null,
  mapDispatchToProps
)(LoginView);

export default Login;

// form handlers example
// import { withFormik } from 'formik'
// import * as Yup from 'yup'

// import Form from './Form'

// const schemaForm = Yup.object().shape({
//   date: Yup.date()
//     .default(() => new Date())
//     .required('Please, give us a estimated date for your event'),
//   zipcode: Yup.string().required(),
//   guests: Yup.number()
//     .required('How many guests?')
//     .positive()
//     .integer(),
//   budget: Yup.string().required('Please, give us an estimate'),
//   occasion: Yup.string().required('For which occasion do you want to host?'),
//   preferences: Yup.string().required('Which meals do you prefer?'),
//   restrictions: Yup.string().required(
//     'Please, its importante to know which meals we must avoid'
//   )
// })

// const HireForm = withFormik({
//   mapPropsToValues: props => ({
//     date: new Date(),
//     zipcode: '',
//     guests: 0,
//     budget: '',
//     occasion: '',
//     preferences: '',
//     restrictions: ''
//   }),
//   validationSchema: schemaForm,
//   handleSubmit: (values, { props }) => props.onSubmit({ ...values })
// })(Form)

// export default HireForm
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import * as api from "../../api";

// import LoginView from '../../components/LoginView'

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       doLogin: (user, pass) => api.doLogin(user, pass)
//     },
//     dispatch
//   );

// const Login = connect(
//   null,
//   mapDispatchToProps
// )(LoginView);

// export default Login;

// // form handlers example
// import { withFormik } from 'formik'
// import * as Yup from 'yup'

// import Form from './Form'

// const schemaForm = Yup.object().shape({
//   date: Yup.date()
//     .default(() => new Date())
//     .required('Please, give us a estimated date for your event'),
//   zipcode: Yup.string().required(),
//   guests: Yup.number()
//     .required('How many guests?')
//     .positive()
//     .integer(),
//   budget: Yup.string().required('Please, give us an estimate'),
//   occasion: Yup.string().required('For which occasion do you want to host?'),
//   preferences: Yup.string().required('Which meals do you prefer?'),
//   restrictions: Yup.string().required(
//     'Please, its importante to know which meals we must avoid'
//   )
// })

// const HireForm = withFormik({
//   mapPropsToValues: props => ({
//     date: new Date(),
//     zipcode: '',
//     guests: 0,
//     budget: '',
//     occasion: '',
//     preferences: '',
//     restrictions: ''
//   }),
//   validationSchema: schemaForm,
//   handleSubmit: (values, { props }) => props.onSubmit({ ...values })
// })(Form)

// export default HireForm

