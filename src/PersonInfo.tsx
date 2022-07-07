import React from 'react';

type Props = {
  data: Person;
  onSelect: (id: string) => void;
  isSelected: boolean;
};

function PersonInfo({ data, onSelect, isSelected }: Props) {
  return (
    <div
      onClick={() => onSelect(data.id)}
      className={isSelected ? 'person-info-selected' : 'person-info'}>
      <div className="firstNameLastName">{data.firstNameLastName}</div>
      <div className="jobTitle">{data.jobTitle}</div>
      <div className="emailAddress">{data.emailAddress}</div>
    </div>
  );
}

export default PersonInfo;
