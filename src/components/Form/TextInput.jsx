import { useField } from "formik";

const TextInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      <input
        {...props}
        {...field}
        className={`text-black py-2 border-b border-b-gray-400 ${
          meta.touched && meta.error && "border-b-red"
        } placeholder:text-black placeholder:opacity-40 focus:outline-none`}
      />

      {meta.touched && meta.error && (
        <p className="text-xs text-red font-medium">{meta.error}</p>
      )}
    </div>
  );
};

export default TextInput;
