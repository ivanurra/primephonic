import { getProviders, signIn } from "next-auth/react";

export default function Login({ providers }) {
  return (
    <div>
      <img src="/logo.png" alt="Primephonic Logo" width="350px" />
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
