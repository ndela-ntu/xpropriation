export default function NewsLetter() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">Subscribe to our newsletter</h1>
        <p>
          Keep up with the latest blog posts by staying updated. No spamming: we
          promise.
        </p>
      </div>
      <div className="flex space-x-5 w-full">
        <input
        placeholder="Enter your email"
          type="email"
          className="flex-1 shadow-md rounded-lg p-4 placeholder:text-gray-600 bg-transparent"
        />
        <button className="flex-2 bg-red-950 p-4 rounded-lg text-white">Subscribe</button>
      </div>
      <p>
        By clicking Sign Up you’re confirming that you agree with our Terms and
        Conditions
      </p>
    </div>
  );
}
