import style from './ControlledForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../yup/schema';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ICountry, FormData, RootState } from '../../Interfaces/interfaces';
import { setControlledFormData, setCountries } from '../../redux/formSlice';
import { updatedCountries } from '../../constants/const';
import { handleImageChange } from '../helpers/handleImageChange';
import { useNavigate } from 'react-router-dom';

const ControlledForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const countries = useSelector((state: RootState) => state.form.countries);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(
    (country: ICountry) =>
      country.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCountries(updatedCountries));
  }, [dispatch]);
  const onSubmit = (data: FormData) => {
    dispatch(setControlledFormData(data));
    navigate('/');
  };

  return (
    <div className={style.App}>
      <h3>Controlled Component</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name :</label>
          <input type="text" {...register('name')} />
          {errors.name && (
            <p className={style.ErrorMessage}>{errors.name.message}</p>
          )}
        </div>
        <div>
          <label>Age :</label>
          <input type="text" {...register('age')} />
          {errors.age && (
            <p className={style.ErrorMessage}>{errors.age.message}</p>
          )}
        </div>
        <div>
          <label>Email :</label>
          <input type="text" {...register('email')} />
          {errors.email && (
            <p className={style.ErrorMessage}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label>Password :</label>
          <input type="password" {...register('password')} />
          {errors.password && (
            <p className={style.ErrorMessage}>{errors.password.message}</p>
          )}
        </div>
        <div>
          <label>Confirm password :</label>
          <input type="password" {...register('confirmPassword')} />
          {errors.confirmPassword && (
            <p className={style.ErrorMessage}>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div>
          Select your gender
          <select {...register('gender')}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && (
            <p className={style.ErrorMessage}>{errors.gender.message}</p>
          )}
        </div>
        <div>
          accept T&C
          <input type="checkbox" {...register('terms')} />
          {errors.terms && (
            <p className={style.ErrorMessage}>{errors.terms.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="country">Select your country</label>
          <select id="country" {...register('country')}>
            {countries.map((country: ICountry) => (
              <option key={country.value}>{country.label}</option>
            ))}
          </select>
          {errors.country && (
            <p className={style.ErrorMessage}>{errors.country.message}</p>
          )}
        </div>
        <div>
          <p>Country Search</p>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className={style.AppCountry}>
            {filteredCountries.map((country: ICountry) => (
              <li key={country.value}>{country.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <label>Upload Picture:</label>
          <input
            type="file"
            accept=".png, .jpeg"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
