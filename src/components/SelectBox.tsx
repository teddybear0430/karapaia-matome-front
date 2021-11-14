import React from 'react';
import { usePosts } from '../../lib/hooks/use-posts';

type Props = {
  options: {
    label: string;
    value: string;
  }[];
};

const SelectBox: React.FC<Props> = ({ options }) => {
  const { sortStatus, handleChange } = usePosts();

  return (
    <select id="posts-select" name="posts" className="border border-gray" onChange={handleChange} value={sortStatus}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
