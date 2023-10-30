/* eslint-disable react/prop-types */
function Button({ children, disabled, type }) {
  const base =
    'inline-block text-sm rounded-full bg-green-300 font-semibold tracking-wide text-stone-800 transition-colors duration-300 hover:bg-green-200 focus:bg-green-200 focus:outline-none focus:ring-1 focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 w-24 sm:px-6 sm:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    rounded: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-xs',
    secondary:
      'inline-block  text-xs rounded-xl border-2 border-green-500 px-4 py-2.5 font-semibold tracking-wide text-stone-600 transition-colors duration-300 hover:bg-green-200 hover:text-stone-800 focus:bg-green-500 focus:text-stone-800 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
