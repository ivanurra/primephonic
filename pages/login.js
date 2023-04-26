import { getProviders } from "next-auth/react";

function Login({ providers }) {
  return (
    <div>
      <img src="/logo.png" alt="Primephonic Logo" className="w-80 mb-5" />

      {Object.values(providers || {}).map((provider) => (
        <div key={provider.name}>
          <button>Login with {provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
