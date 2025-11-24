import axios from '../api/axiosInstance.js'
import React, { useState } from 'react'


const FileUpload = ({ onUploadSuccess }) => {
    const [file , setFile] = useState(null)
    const [loading , setLoading]  = useState(false)

    const handleUpload = async ()=> {
        if(!file) return alert("Please Upload a pdf ");

        const formData = new FormData()
        formData.append("file", file)

        console.log(formData);
        

        try {
            setLoading(true)

            const res = await axios.post('/documents/upload-file' , formData , {
                headers : { "Content-Type": "multipart/form-data" }
            })

            onUploadSuccess(res.data.message)
            
        } 
        catch (error) {
           console.error(error)
           alert("Failed to upload a pdf") 
        }
        finally{
            setLoading(false)
        }

    }



  return (
    <>
        <div className='mt-5'>
            <input type="file"
                accept='appliction/pdf'
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button
                className='px-5 py-2 bg-black text-white rounded cursor-pointer'
                onClick={handleUpload} disabled={loading}
            >
                {loading ? "Uploading" : "Upload PDF"}
            </button>
        </div>

        
    </>
    
    
  )
}

export default FileUpload