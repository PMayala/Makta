/* eslint-disable react/prop-types */
export default function WelcomeText(props) {
  return (
    <p className="font-kumbh font-semibold text-4xl text-neutral-600">
      Welcome, {props.text} your account
    </p>
  );
}
