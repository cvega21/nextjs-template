// import { useRouter } from 'next/router';
import { useState } from 'react';

import { Meta } from '@/layouts/Meta';

const Index = () => {
  // const router = useRouter();
  const [address, setAddress] = useState('');
  const [code, setCode] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [result, setResult] = useState(null);

  return (
    <div className="flex min-h-screen min-w-full flex-col items-center border border-black">
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">AI Smart Contract Auditor</h1>
        <p>Enter your smart contract address or code to analyze</p>
        <input
          placeholder="Enter your smart contract address"
          className="mt-8 w-full border"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <p>OR</p>
        <textarea
          placeholder="Type your smart contract code"
          className="w-full border"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <button
          className="my-8 rounded-lg border bg-blue-500 p-3 font-bold text-white"
          onClick={() => {
            // console.log('analyzing!');
          }}
          type="button"
        >
          Analyze Code
        </button>
      </div>
    </div>
  );
};

export default Index;
