import type { ReactElement, ChangeEvent } from 'react';

import { useState } from 'react';
import { useDebounce, useEffectOnce } from 'react-use';
import { styled } from '@mui/material/styles';
import MuiInputBase, { inputBaseClasses } from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    color: theme.palette.text.primary,
    border: '1px solid',
    borderColor: theme.palette.grey[400],
    borderRadius: '50rem',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
  };
});

const SearchIconWrapper = styled('div')(({ theme }) => {
  return {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

const InputBase = styled(MuiInputBase)(({ theme }) => {
  return {
    color: 'inherit',
    borderRadius: '50rem',
    [`& .${inputBaseClasses.input}`]: {
      padding: theme.spacing(0.75, 1),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  };
});

type QuickSearchProps = {
  setGlobalFilter: (value: string) => void;
};

const QuickSearch = (props: QuickSearchProps): ReactElement => {
  const { setGlobalFilter } = props;
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const [, cancel] = useDebounce(
    () => {
      setGlobalFilter(value);
    },
    300,
    [value]
  );

  useEffectOnce(() => {
    cancel();
  });

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color="action" />
      </SearchIconWrapper>
      <InputBase placeholder="Quick Search" size="small" onChange={handleChange} />
    </Search>
  );
};

export default QuickSearch;
