import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = (props) => {
  const label = props.label;
  const text = props.text;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters  or less')
        .required('Please add your first name'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters  or less')
        .required('Please add your last name'),
      email: Yup.string()
        .email('Invalid email, Please enter your full email address')
        .required('your email is required'),
      password: Yup.string()
        .required('Please enter your password')
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
      confirmPassword: Yup.string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password'), null], "Passwords don't match."),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: '' });
    },
  });

  return (
    <div className='container-fluid signup-container'>
      <Link className='link-home' to='/'>
        Home
      </Link>
      <div className='row row-signup'>
        <div className='col-lg-6 col-md-6 d-none d-md-block image-container-signup'></div>
        <div className='col-lg-6 col-md-6 form-container-signup'>
          <div className='col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center'>
            <form onSubmit={formik.handleSubmit}>
              <h1 className='text-center'>{text}</h1>
              <div className='mb-3 mt-5 form-input'>
                <input
                  className='form-control'
                  id='firstName'
                  name='firstName'
                  type='text'
                  placeholder='First Name'
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <p className='error'>{formik.errors.firstName}</p>
                ) : null}
              </div>
              <div className='mb-3 mt-5 form-input'>
                <input
                  id='lastName'
                  name='lastName'
                  className='form-control'
                  type='text'
                  placeholder='Last Name'
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <p className='error'>{formik.errors.lastName}</p>
                ) : null}
              </div>
              <div className='mb-3 mt-5 form-input'>
                <input
                  id='email'
                  name='email'
                  className='form-control'
                  type='email'
                  placeholder='Email'
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className='error'>{formik.errors.email}</p>
                ) : null}
              </div>
              <div className='mb-3 mt-5 form-input'>
                <input
                  id='password'
                  name='password'
                  className='form-control'
                  type='password'
                  placeholder='Password'
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className='error'>{formik.errors.password}</p>
                ) : null}
              </div>
              <div className='mb-3 mt-5 form-input'>
                <input
                  id='confirmPassword'
                  name='confirmPassword'
                  className='form-control'
                  type='password'
                  placeholder='Confirm Password'
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p className='error'>{formik.errors.confirmPassword}</p>
                ) : null}
              </div>
              <div className='d-grid gap-2 mt-5'>
                <button type='submit' className='btn'>
                  {label}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
