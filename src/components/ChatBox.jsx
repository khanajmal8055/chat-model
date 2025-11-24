import React, { useState } from 'react'
import axios from '../api/axiosInstance'

const ChatBox = () => {
    const [loading , setLoading] = useState(false)
    const [question , setQusetion] = useState("")
    const [response , setResopnse] = useState("")

    const ask = async()=>{
        if(!question) return;

        try {
            setLoading(true)
            
            const res = await axios.post('/documents/chat' , {question})

            

            setResopnse(res.data.data.answer)
            
        } 
        catch (error) {
            console.error(error)
            alert("Something happen wrong try after some time")
        }
        finally{
            setLoading(false)
        }
    }
  return (
    <>
         <div className='mt-5'>
            <textarea 
                className='w-full h-32 mb-3 p-3 border border-gray-300 rounded'
                value={question}
                onChange={(e) => setQusetion(e.target.value)}
                placeholder='Ask Your Question'
            />

            <button
                className='px-5 py-2 bg-black text-white rounded cursor-pointer'
                onClick={ask} disabled={loading}
            >
                {loading ? "Thinking" : "Ask"}
            </button>

            {response && (
                <div className='mt-5 bg-gray-200 p-4 rounded'>
                    <h3>Answer :</h3>
                    <p>{response}</p>
                </div>
            )}
         </div>
    </>
   
    
  )
}

export default ChatBox