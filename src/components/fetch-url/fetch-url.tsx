import React from 'react';
import './fetch-url.css';

interface Props {
  label: string;
  onClick: () => void;
  value: string;
  handleChange: (e: string) => void;
}

export default React.memo(function FetchUrl({
  label,
  onClick,
  value,
  handleChange,
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleChange(e.target.value);

  return (
    <div className="fetch-url-container">
      <label className="fetch-url-label">{label}</label>
      <input
        aria-label={label}
        className="fetch-url-input"
        onChange={handleInputChange}
        value={value}
      />
      <button className="button-primary" onClick={onClick} disabled={value === ''}>
        Send
      </button>
    </div>
  );
});
