import React from 'react';
import { usePosts } from '../../lib/hooks/use-posts';

type Options = {
  label: string;
  value: string;
}[];

const SelectBox: React.FC<{ options: Options }> = ({ options }) => {
  const { handleChange } = usePosts();

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
