import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }) {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="capitalize border px-4 py-1.5 rounded-lg 
        font-medium tracking-wide hover:bg-white hover:text-sky-500
        transition duration-700 ease-in-out border-transparent shadow-lg 
        shadow-sky-500" 
          onClick={() => signIn(provider.id, { callbackUrl: "/"})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}