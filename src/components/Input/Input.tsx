import { ForwardedRef, forwardRef, RefObject } from 'react';

type Props = {
  id: string;
  value?: string;
  type: string;
  title: string;
  name: string;
  defaultChecked?: boolean;
};

const InputNested = forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <label htmlFor={props.id}>
        {props.title}
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          value={props.value}
          ref={ref}
          defaultChecked={props.defaultChecked}
        />
      </label>
    </>
  );
});

const InputSibling = forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        ref={ref}
        defaultChecked={props.defaultChecked}
      />
    </>
  );
});

export { InputNested, InputSibling };
