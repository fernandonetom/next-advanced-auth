type FormErrorProps = {
  message: string;
};

export const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className="p-2 bg-red-300 text-sm text-red-800 rounded-sm shadow-sm">
      {message}
    </div>
  );
};
