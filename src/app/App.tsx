import type { JSX } from 'react';
import { useEffect } from 'react';

import './styles/index.css';
import { getUsers } from '@/entities/users/model/usersSlice';
import { HomePage } from '@/pages/home';

import { useAppDispatch } from './store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getUsers());
  }, [dispatch]);

  return <HomePage />;
}

export default App;
