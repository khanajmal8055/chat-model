import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FileUpload from './components/FileUpload'
import ChatBox from './components/ChatBox'

function App() {
  const [uploaded, setUploaded] = useState(false)

  return (
    <>
    <div className='w-[60%] mx-auto font-sans'>
      {!uploaded ? (
      <FileUpload onUploadSuccess={() => setUploaded(true)}/>

      ) : (
        <ChatBox/>
      )
      }
    </div>
      
    </>
  )
}

export default App
