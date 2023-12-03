import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { ICountry, RootState } from '../Interfaces/interfaces';
import { setCountries, setUncontrolledFormData } from '../redux/formSlice';
import { updatedCountries } from '../constants/const';
import style from './ControlledForm/ControlledForm.module.scss';
import { handleImageChange } from './helpers/handleImageChange';

const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState('');

  const countries = useSelector((state: RootState) => state.form.countries);

  const filteredCountries = countries.filter(
    (country: ICountry) =>
      country.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    dispatch(setCountries(updatedCountries));
  }, [dispatch]);

  const onSubmit = () => {
    const data = {
      name: nameRef.current?.value || '',
      age: ageRef.current?.value || '',
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirmPassword: confirmPasswordRef.current?.value || '',
      gender: genderRef.current?.value || '',
      terms: termsRef.current?.checked || false,
      country: countryRef.current?.value || '',
    };

    dispatch(setUncontrolledFormData(data));
  };

  return (
    <div className={style.App}>
      <h3>Uncontrolled Component</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div>
          <label>Name :</label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label>Age :</label>
          <input type="text" ref={ageRef} />
        </div>
        <div>
          <label>Email :</label>
          <input type="text" ref={emailRef} />
        </div>
        <div>
          <label>Password :</label>
          <input type="password" ref={passwordRef} />
        </div>
        <div>
          <label>Confirm password :</label>
          <input type="password" ref={confirmPasswordRef} />
        </div>
        <div>
          Select your gender
          <select ref={genderRef}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <p>Country Search</p>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            ref={countryRef}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className={style.AppCountry}>
            {filteredCountries.map((country: ICountry) => (
              <li key={country.value}>{country.label}</li>
            ))}
          </ul>
        </div>
        <div>
          accept T&C
          <input type="checkbox" ref={termsRef} />
        </div>
        <div>
          <label>Upload Picture:</label>
          <input
            type="file"
            accept=".png, .jpeg"
            onChange={handleImageChange}
            ref={fileInputRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
