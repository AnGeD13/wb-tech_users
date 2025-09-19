import { Container } from '@mui/material';
import type { JSX } from 'react';

import { UsersTable } from '@/entities/users';

import styles from './homepage.module.css';

export function HomePage(): JSX.Element {
  return (
    <Container maxWidth='md' className={styles.wrapper}>
      <UsersTable />
    </Container>
  );
}
