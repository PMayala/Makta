/* eslint-disable react/prop-types */
export default function Button(props) {
  return (
    <button
      className={
        props.className + " text-white text-center font-semibold px-7 py-3"
      }
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
