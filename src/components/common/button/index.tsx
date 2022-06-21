import cn from 'utils';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: string;
};

const variants = {
  black: 'border-transparent bg-black text-white',
  green: 'border-transparent bg-green-400 text-black',
  transparent: 'text-white',
};

const Button = ({ type = 'button', variant = 'black' }: ButtonProps) => (
  <button
    className={cn(
      variants[variant],
      'flex h-fit w-fit items-center justify-center rounded-full border px-5 py-3 text-sm uppercase tracking-wide transition-all hover:-translate-y-2 hover:border-black hover:bg-white hover:text-black',
    )}
    type={type}
  >
    Button Text
  </button>
);

export default Button;
