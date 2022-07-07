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
      style={{
        display: 'flex',
        height: '100px',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '32px',
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
        margin: '10px 0',
        background: '#fff',
        cursor: 'pointer',
      }}
      className={isSelected ? 'person-info-selected' : 'person-info'}>
      <div className="firstNameLastName">{data.firstNameLastName}</div>
      <div className="jobTitle">{data.jobTitle}</div>
      <div className="emailAddress">{data.emailAddress}</div>
    </div>
  );
}

export default PersonInfo;
