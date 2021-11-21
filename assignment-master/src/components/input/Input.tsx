import React from 'react';

import styles from './Input.module.scss';

interface Props  {
  name: string;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: number | string;
  isError?: string;
  className?: string;
  type: string;
}

const Input = ({
  name,
  label,
  onChange,
  value,
  isError,
  className = '',
  type = 'text',
  
}:Props) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <input
        type={type}
        className={`${styles.input} ${isError && styles.inputError}`}
        placeholder=" "
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        
      />
      <div
        className={`${styles.bottomLine} ${isError && styles.bottomLineError}`}
      ></div>
      {isError && <span className={styles.error}>{isError}</span>}
      <label
        htmlFor={name}
        className={`${styles.label} ${isError && styles.labelError}`}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;