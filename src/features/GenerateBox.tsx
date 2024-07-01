import React, { useState } from 'react';

export const GenerateBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [btn, setBtn] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'You', text: input.trim() }];
      setMessages(newMessages);

      // Simulate a reply
      if (input.trim().toLowerCase() === 'reply thanking for the opportunity') {
        setTimeout(() => {
          setMessages([...newMessages, { sender: 'System', text: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask." }]);
          setBtn(true);
        }, 500); // Simulate a delay
      }

      setInput('');
    }
  };

  const handleInsert = () => {
    const id = ".msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate";
    const ele = document.querySelector(id);

    if (ele) {
        const pTag = ele.querySelector('p');
        if (pTag) {
            // Construct the combined message from state
            const newEle = document.createElement('p');
            const combinedMessage = messages.map(message => `${message.sender}: ${message.text}`).join('\n');
            newEle.innerHTML = combinedMessage;

            // Replace the existing <p> with the new <p>
            ele.replaceChild(newEle, pTag);
        }
    }
};


  return (
    <div className="absolute w-[450px] h-auto bottom-[220px] border-2 border-gray-400 bg-white p-4 flex flex-col justify-between rounded-lg shadow-lg">
      <div className="flex flex-col space-y-2">
        {messages.map((message, index) => (
          <div key={index} className={`p-2 rounded-lg ${message.sender === 'You' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className='w-full mt-4'>
        <textarea
          placeholder='Your Prompt'
          className='w-full rounded-lg text-lg flex items-center justify-center border-2 border-gray-600'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className='flex justify-end space-x-2'>
          {btn && (
            <button
              className='rounded-lg bg-blue-500 text-lg w-20 h-10 mt-2'
              onClick={handleInsert}
            >
              Insert
            </button>
          )}
          <button
            className='rounded-lg bg-blue-500 text-lg w-20 h-10 mt-2'
            onClick={handleSend}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};
