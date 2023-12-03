import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be at least 2 characters long')
    .matches(/^[A-Z].*$/, 'Ensure the first letter is in uppercase.')
    .required('Name is required'),
  age: yup
    .number()
    .positive('Please provide a positive number for the age.')
    .required('Age is required'),
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Ensure your password includes at least one uppercase letter, one lowercase letter, one number, and one special character.'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Make sure the passwords match.')
    .required('Confirm Password is required'),
  gender: yup.string().required('Gender is required'),
  country: yup.string().required('Country is required'),
  terms: yup
    .bool()
    .oneOf([true], 'Please agree to the terms and conditions.')
    .required(),
});

//   const allowedExtensions = ['png', 'jpeg'];
//   const maxFileSizeInBytes = 1024 * 1024;
//   const extension = file.name.split('.').pop().toLowerCase();
//   if (
//     allowedExtensions.includes(extension) &&
//     file.size <= maxFileSizeInBytes
//   ) {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//     console.error('Invalid file format or size');
//   }
// }
