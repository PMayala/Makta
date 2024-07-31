/* eslint-disable react/prop-types */
export default function Input({ label, id, type = "text",name, value, onChange,placeholder }) {
  return (
    <div className="mb-4">
      {label && <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
