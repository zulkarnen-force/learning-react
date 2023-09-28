const Button = ({ variant = "black", children = "" }) => {
  return (
    <button className={`h-10 px-6 font-semi-bold rounded-md ${variant} `}>
      {children}
    </button>
  );
};

export default Button;
