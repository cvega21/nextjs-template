// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useChat, useCompletion } from 'ai/react';

import { Meta } from '@/layouts/Meta';

const Index = () => {
  const [code, setCode] = useState('');
  // const { completion, input, handleInputChange, handleSubmit } = useCompletion({
  //   api:'/api/analyzeCode'
  // });

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/analyzeCode'
  })

  // useEffect(() => {
    
  // }, [completion])


  return (
    <div className="flex min-h-screen min-w-full flex-col items-center border border-black">
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">AI Smart Contract Auditor</h1>
        {/* <p>Enter your smart contract address or code to analyze</p>
        <input
          placeholder="Enter your smart contract address"
          className="mt-8 w-full border"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <p>OR</p> */}
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Type your smart contract code"
            className="w-full border"
            value={input}
            onChange={handleInputChange}
          />
          <button
            className="my-8 rounded-lg border bg-blue-500 p-3 font-bold text-white"
            onClick={() => {
              // console.log('analyzing!');
            }}
            type='submit'
          >
            Analyze Code
          </button>
        </form>
        
        <p>
          {messages.map((message, index) => {
            return (
              <div key={index}>
                <p>{message.content}</p>
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Index;
