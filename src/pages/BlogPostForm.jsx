import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const BlogPostForm = (props) => {
  const label = props.label;
  const text = props.text;

  const formik = useFormik({
    initialValues: {
      BlogTopic: '',
      BlogPost: '',
      BlogDetails: '',
      BlogSummary: '',
    },
    validationSchema: Yup.object({
      BlogTopic: Yup.string()
        .max(30, 'Characters has been exceeded')
        .required('Please provide a topic for this Blog Post'),
      BlogPost: Yup.string()
        .max(300, 'Characters has been exceeded')
        .required('Please provide a post for this Blog'),
      BlogDetails: Yup.string()
        .max(300, 'Characters has been exceeded')
        .required('Please provide a short detail for this Blog Post'),
      BlogSummary: Yup.string()
        .max(300, 'Characters has been exceeded')
        .required('Please provide a summary for this Blog Post'),
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
        <div className='col-lg-6 col-md-6 d-none d-md-block image-container-blog'></div>
        <div className='col-lg-6 col-md-6 form-container-signup'>
          <div className='col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center'>
            <form onSubmit={formik.handleSubmit}>
              <h1 className='text-center'>{text}</h1>
              <div className='mb-3 mt-5 form-input'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Blog Topic'
                  id='BlogTopic'
                  name='BlogTopic'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.BlogTopic}
                />
                {formik.touched.BlogTopic && formik.errors.BlogTopic ? (
                  <p className='error'>{formik.errors.BlogTopic}</p>
                ) : null}
              </div>
              <div className='mb-3 mt-5 form-input'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Blog Post'
                  id='BlogPost'
                  name='BlogPost'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.BlogPost}
                />
                {formik.touched.BlogPost && formik.errors.BlogPost ? (
                  <p className='error'>{formik.errors.BlogPost}</p>
                ) : null}
              </div>
              <div className='mb-3 mt-5 form-input'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Blog Details'
                  id='BlogDetails'
                  name='BlogDetails'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.BlogDetails}
                />
                {formik.touched.BlogDetail && formik.errors.BlogDetail ? (
                  <p>{formik.errors.BlogDetail}</p>
                ) : null}
              </div>
              <div className='mb-3 mt-5 form-input'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Blog Summary'
                  id='BlogSummary'
                  name='BlogSummary'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.BlogSummary}
                />
                {formik.touched.BlogSummary && formik.errors.BlogSummary ? (
                  <p className='error'>{formik.errors.BlogSummary}</p>
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

export default BlogPostForm;
