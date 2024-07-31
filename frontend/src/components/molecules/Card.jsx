/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div className="w-1/4 bg-blue-950 py-7 px-10 rounded-2xl text-white font-semibold font-kumbh">
      <h1 className="text-4xl text-right">{props.data}</h1>
      <h3 className="text-2xl text-left">{props.name}</h3>
    </div>
  );
}
