import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = (props) => {
  const label = props.label;
  const text = props.text;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email. Please enter your full email address')
        .required('email is required'),
      password: Yup.string()
        .required('Please enter your password')
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='container-fluid mb-6 login-container'>
      <hr />
      <Link className='link-home' to='/'>
        Home
      </Link>
      <div className='row'>
        <div className='col-lg-6 col-md-6 d-none d-md-block image-container'></div>
        <div className='col-lg-6 col-md-6 form-container'>
          <div className='col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center'>
            <form onSubmit={formik.handleSubmit}>
              <h5 className='text-center'>{text}</h5>
              <div className='mb-3 mt-5 form-input'>
                <input
                  className='form-control'
                  id='email'
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type='email'
                  name='email'
                  placeholder='Email'
                  htmlFor='email'
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className='error'>{formik.errors.email}</p>
                ) : null}
              </div>
              <div className='form-input'>
                <input
                  className='form-control'
                  id='password'
                  name='password'
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type='password'
                  placeholder='Password'
                  htmlFor='password'
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className='error'>{formik.errors.password}</p>
                ) : null}
              </div>
              <div className='d-grid gap-2 mt-5 form-input'>
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

export default LoginForm;

{
  /* <div>
                    {data&&
                    <div>
                        <h1>Name: {data.username}</h1>
                        <h1>Description:{data.password}</h1></div>}
                </div> */
}
