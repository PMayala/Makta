import WelcomeText from "../components/atoms/WelcomeText";
import LoginMolecule from "../components/molecules/LoginMolecule";
import AuthForm from "../components/organisms/AuthForm";

export default function Login() {
  return (
    <div className="bg-zinc-50 flex flex-col gap-10 items-center justify-center h-screen">
      <WelcomeText text="Log into" />
      <AuthForm pageType="login">
        <LoginMolecule />
      </AuthForm>
    </div>
  );
}
