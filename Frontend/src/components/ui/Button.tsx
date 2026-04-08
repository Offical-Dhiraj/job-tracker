export default function Button({ children, className = "", ...props }: any) {
  return (
    <button className={`btn btn-primary ${className}`} {...props}>
      {children}
    </button>
  );
}