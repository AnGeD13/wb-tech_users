import type { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import type { JSX } from 'react';

import { useAppSelector } from '@/app/store';

import type { User } from '../model/types';

export function UsersTable(): JSX.Element {
  const users = useAppSelector(state => state.users.users);

  const columns: GridColDef<User>[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'surname',
      headerName: 'Surname',
      width: 300,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 350,
    },
  ];

  return (
    <DataGrid
      autosizeOnMount={true}
      rows={users}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      rowHeight={60}
    />
  );
}
