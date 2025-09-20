import type { JSX } from 'react';
import { useEffect } from 'react';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { getUsers } from '@/entities/users/model/usersSlice';
import { UserDetailsPage } from '@/pages/details';
import { HomePage } from '@/pages/home';

import { useAppDispatch } from './store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/:id' element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
