import { forwardRef, ComponentProps, LegacyRef } from 'react';

type HtmlInputProps = ComponentProps<'input'>;
type InputProps = HtmlInputProps & { label: string };

export const Input = forwardRef(
  (
    { label, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement> | undefined,
  ) => (
    <>
      <p>{label}</p>
      <input
        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        {...props}
        ref={ref}
      />
    </>
  ),
);
