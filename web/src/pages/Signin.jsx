import { SignIn } from "@clerk/clerk-react"

export default function Signin() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <SignIn path="/signin" routing="path" signUpUrl="/signup" redirectUrl="/home"/>
    </div>
  )
}