import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
import { toggleModalForm } from '../modalForm/slice';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const privateInstans = axios.create({
  baseURL: 'https://internet-shop-api-production.up.railway.app',
  signal: new AbortController().signal,
});
const publicInstans = axios.create({
  baseURL: 'https://internet-shop-api-production.up.railway.app',
  signal: new AbortController().signal,
});

const token = {
  set(token) {
    privateInstans.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    privateInstans.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'user/addUser',
  async (user, { dispatch }) => {
    try {
      const { data } = await publicInstans.post('/auth/registration', user);

      token.set(data.accessJwt);
      dispatch(toggleModalForm(false));

      Notiflix.Notify.success(
        'Підтвердіть свою електронну адресу, щоб мати можливість продавати та купувати товари на нашому маркетплейсі'
      );
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk('user/enterUser', async user => {
  try {
    const { data } = await publicInstans.post('/auth/login', user);
    if (!data.user.isActivated) {
      Notiflix.Notify.failure(
        'Ваша пошта не підтверджена. Перейдіть на пошту для підтвердження адреси'
      );
      throw new Error('Це помилка!');
    }
    token.set(data.backend_tokens.token);
    console.log(data);

    window.location.reload();
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Неправильний логін або пароль');
    // : Notiflix.Notify.failure(error.response.data.message);
    console.log(error);
  }
});

export const restorePassword = createAsyncThunk(
  'user/restorePassword',
  async (user, { dispatch }) => {
    try {
      const { data } = await publicInstans.post('/auth/forgotPassword', user);
      dispatch(toggleModalForm(false));

      Notiflix.Notify.success(
        'Ми відправили інформацію для відновлення паролю вам на ел. пошту'
      );
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      console.log('error', error);
    }
  }
);

export const logOut = createAsyncThunk('user/exitUser', async () => {
  try {
    await privateInstans.post('/auth/logout');
    token.unSet();
  } catch (error) {
    console.log(error.message);
  }
});

export const update = createAsyncThunk('user/update', async (_, thunkApi) => {
  const storThunk = thunkApi.getState();

  const presentToken = storThunk.users.token;
  if (presentToken) {
    try {
      token.set(presentToken);
      const { data } = await privateInstans.get('/auth/refresh');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  return;
});

export const getUser = createAsyncThunk('myUser/getUser', async user => {
  try {
    const { data } = await privateInstans.get(`/user/${user}`);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
});
