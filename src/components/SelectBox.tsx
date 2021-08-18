import React from 'react';

type Options = {
  label: string;
  value: string;
}[];

const SelectBox: React.FC<{ options: Options }> = ({ options }) => {
  return (
    <select id="posts-select" name="posts" className="border border-gray">
      {options.map((option, i) => (
        <option key={i} value="{option.value}">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
