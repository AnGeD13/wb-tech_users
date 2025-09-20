import type { GridColDef, GridRowParams } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import type { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@/app/store';

import type { User } from '../model/types';

export function UsersTable(): JSX.Element {
  const navigate = useNavigate();
  const users = useAppSelector(state => state.users.users);

  const columns: GridColDef<User>[] = [
    {
      field: 'name',
      headerName: 'Имя',
      width: 200,
    },
    {
      field: 'surname',
      headerName: 'Фамилия',
      width: 300,
    },
    {
      field: 'email',
      headerName: 'Почта',
      width: 350,
    },
  ];

  const handleRowClick = (params: GridRowParams<User>): void => {
    const id: string = params.row.id;
    navigate(`/user/${id}`);
  };

  return (
    <DataGrid
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
      onRowClick={handleRowClick}
      sx={{
        '& .MuiDataGrid-row:hover': {
          cursor: 'pointer',
        },
      }}
    />
  );
}
