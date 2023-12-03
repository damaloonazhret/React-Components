import { useSelector } from 'react-redux';
import { FormData, RootState } from '../Interfaces/interfaces';

const MainPage = () => {
  const data = useSelector(
    (state: RootState) => state.form.controlledFormData
  ) as FormData;

  return (
    <div>
      <h1>This is Main Page</h1>
      <ul>
        {data ? (
          <li>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Email: {data.email}</p>
            <p>Gender: {data.gender}</p>
            <p>Country: {data.country}</p>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default MainPage;
