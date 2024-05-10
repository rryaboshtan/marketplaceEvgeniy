import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {
  ButtonExpand,
  SortProduct,
  SortText,
  SelectSort,
} from './ProductListPage.styled';
import { useState } from 'react';

export default function Sort({ value, hendleSort }) {
  const [open, setOpen] = useState(false);
  const hendleChangeSort = evt => {
    hendleSort(evt.target.value);
  };
  return (
    <SortProduct>
      <SortText>Сортування:</SortText>
      <div className="select">
        <ButtonExpand>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
        <SelectSort
          onClick={() => setOpen(prev => !prev)}
          name="sort"
          value={value}
          onChange={hendleChangeSort}
        >
          <option value="new">Спочатку нові</option>
          <option value="cheep">Найдешевші</option>
          <option value="expensive">Найдорожчі</option>
        </SelectSort>
      </div>
    </SortProduct>
  );
}
