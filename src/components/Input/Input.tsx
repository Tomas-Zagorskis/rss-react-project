import { forwardRef } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { Music } from 'types/types';

type Props = {
  type?: string;
  name: Path<Music>;
  label: string;
  defaultChecked?: boolean;
  register: UseFormRegister<Music>;
  required: boolean;
  ariaInvalid?: boolean;
  value?: string;
};
type RadioProps = {
  name: Path<Music>;
  labels: string[];
  defaultChecked?: boolean;
  register: UseFormRegister<Music>;
  required: boolean;
  ariaInvalid?: boolean;
  values: string[];
};

const CommonInput = ({ type, name, label, register, required, ariaInvalid }: Props) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...register(name, { required })} aria-invalid={ariaInvalid} />
    </>
  );
};

const RadioInputs = ({ register, name, required, values, labels }: RadioProps) => {
  const renderInputs = values.map((value, index) => (
    <label key={value}>
      {labels[index]}
      <input type="radio" value={value} {...register(name, { required })} />
    </label>
  ));
  return <>{renderInputs}</>;
};

const SelectInputs = forwardRef<
  HTMLSelectElement,
  { label: string; values: string[]; ariaInvalid: boolean } & ReturnType<UseFormRegister<Music>>
>(({ onChange, onBlur, name, label, values, ariaInvalid }, ref) => {
  const renderOptions = values.map((value) => (
    <option value={value} key={value}>
      {value}
    </option>
  ));
  return (
    <>
      <label>
        {label}
        <select
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={ariaInvalid}
        >
          <option value="">Select a country</option>
          {renderOptions}
        </select>
      </label>
    </>
  );
});

export { CommonInput, SelectInputs, RadioInputs };
