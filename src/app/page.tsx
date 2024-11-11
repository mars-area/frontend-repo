'use client'

import { useEffect, useState } from 'react'
import { Box, Button , Container, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { createUser, getListUser } from '@/apis/user'
import { AppDispatch } from '@/lib/store'
import { User } from '@/lib/features/userSlice'

export const CreateUser = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(createUser(data, () => { getListUser() }))
  }

  return (
    <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className='my-4 text-xl font-bold'>Create User</h2>
      <form onSubmit={handleCreateUser}>
        <Box
          sx={{
            gap: '1rem',
            border: '1px solid #444',
            padding: '1rem',
            borderRadius: '1rem',
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <TextField label="First Name" onChange={(e) => setData({...data, firstName: e.target.value})} />
          <TextField label="Last Name" onChange={(e) => setData({...data, lastName: e.target.value})} />
          <TextField label="Email" type='email' onChange={(e) => setData({...data, email: e.target.value})} />
          <TextField label="Password" type='password' onChange={(e) => setData({...data, password: e.target.value})} />
          <Button type='submit' variant='contained' color='primary'>Create User</Button>
        </Box>
      </form>
    </Container>
  )
}

export const ListUser = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { datas } = useSelector((state: any) => state.user)

  useEffect(() => {
    dispatch(getListUser())
  }, [])

  return (
    <Container>
      <h2>User List</h2>
      <ul>
        {datas.map((user: User, index: number) => (
          <li key={index + 1} className='flex gap-2'>
            <p>{index + 1}. </p>
            <p>{user.firstName} {user.lastName}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default function Home() {
  return (
    <main className='bg-white text-gray-950'>
      <Container>
        <h1>User Features</h1>
        <CreateUser />
        <ListUser />
      </Container>
    </main>
  )
}
