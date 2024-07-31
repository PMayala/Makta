import WelcomeText from "../components/atoms/WelcomeText";
import AuthForm from "../components/organisms/AuthForm";
import RegisterModule from "../components/molecules/RegisterMolecule";
export default function Register() {
  return (
    <div className="bg-zinc-50 flex flex-col gap-10 items-center justify-center h-screen">
      <WelcomeText text="Create" />
      <AuthForm pageType="register">
        <RegisterModule />
      </AuthForm>
    </div>
  );
}
