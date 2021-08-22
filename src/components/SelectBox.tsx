import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postsSlice from '../posts/slice';
import { StoreState } from '../posts/store';

type Options = {
  label: string;
  value: string;
}[];

type optionTypes = 'desc' | 'asc' | 'commentDesc' | 'commentAsc';

const SelectBox: React.FC<{ options: Options }> = ({ options }) => {
  const dispatch = useDispatch();
  const postsState = useSelector((state: StoreState) => state.posts);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const eventValue = event.target.value as optionTypes;

    if (eventValue === 'desc') {
      dispatch(postsSlice.actions.sortDesc(postsState.posts));
    } else if (eventValue === 'asc') {
      dispatch(postsSlice.actions.sortAsc(postsState.posts));
    } else if (eventValue === 'commentDesc') {
      dispatch(postsSlice.actions.commentDesc(postsState.posts));
    } else if (eventValue === 'commentAsc') {
      dispatch(postsSlice.actions.commentAsc(postsState.posts));
    }
  };

  return (
    <select id="posts-select" name="posts" className="border border-gray" onChange={handleChange}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
