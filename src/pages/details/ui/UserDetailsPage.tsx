import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useEffect, type JSX } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/store';
import { deleteUserByID, getUserByID } from '@/entities/users/model/usersSlice';
import { getFullDate } from '@/shared/lib';

import styles from './userDetailsPage.module.css';

export function UserDetailsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const user = useAppSelector(state => state.users.currentUser);

  const handleGoBack = (): void => {
    navigate('/');
  };

  const handleDeleteUser = (): void => {
    if (id) {
      void dispatch(deleteUserByID(id));
      handleGoBack();
    }
  };

  useEffect(() => {
    if (id) {
      void dispatch(getUserByID(id));
    }
  }, [dispatch, id]);

  if (user) {
    return (
      <Container className={styles.wrapper} maxWidth='md'>
        <Box className={styles.card}>
          <TextField
            variant='filled'
            label='Имя'
            value={user.name}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField
            variant='filled'
            label='Фамилия'
            value={user.surname}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField
            variant='filled'
            label='Почта'
            value={user.email}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <FormControl>
            <FormLabel id='radio-sex'>Пол</FormLabel>
            <RadioGroup aria-labelledby='radio-sex' defaultValue={user.sex}>
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Женский'
                disabled
              />
              <FormControlLabel
                value='male'
                control={<Radio />}
                label='Мужской'
                disabled
              />
            </RadioGroup>
          </FormControl>
          <TextField
            variant='filled'
            label='Дата рождения'
            value={getFullDate(user.birthday)}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
        </Box>
        <Box className={styles.btns}>
          <Button variant='outlined' color='info' onClick={handleGoBack}>
            Назад
          </Button>
          <Button variant='contained' color='error' onClick={handleDeleteUser}>
            Удалить
          </Button>
        </Box>
      </Container>
    );
  }

  // TODO
  return <p>error</p>;
}
