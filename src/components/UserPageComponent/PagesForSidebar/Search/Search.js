import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import React from 'react';
import { FormSearch } from 'components/Search/Search.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default function Search({ value, setValue }) {
  const { width } = useWindowDimensions();
  function onSubmit(evt) {
    evt.preventDefault();
    setValue(evt.target.elements.search.value);
  }

  return (
    <FormSearch onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Я шукаю..."
        value={value}
        onChange={evt => setValue(evt.target.value)}
      />
      <button type="submit">
        <SearchTwoToneIcon />
        {width >= 1440 && 'Пошук'}
      </button>
    </FormSearch>
  );
}
