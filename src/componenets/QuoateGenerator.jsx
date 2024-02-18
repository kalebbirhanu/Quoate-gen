import  { useState } from 'react'
import axios from 'axios';

const QuoateGenerator = () => {

    const[data, setData] = useState(null);
    const [error, setError] = useState(null)
    const getData = async() => {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            setData(response.data.content);
        } catch {
            setError('coudnot fetch the data')
        }
    }
  return (
    <div>
        <h1>QuoateGenerator</h1>
        <div>
            
            <button onClick={getData}>Generate Quoate</button>
        </div>
        <div>
            {error && <p>could not fetched network problem</p> }
            {data && (
                <div>
                    <p>{data}</p>
                </div>
            )}
        </div>
        
        
        
        </div>
  )
}

export default QuoateGenerator;