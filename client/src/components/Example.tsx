import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Example() {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const data = await (
      await axios.get('http://localhost:1337/api/questions')
    ).data.data;
    setQuestions(data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className='bg-white'>
      <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        {questions.map((question) => {
          return <h1 key={question?.id}>{question.attributes.Question}</h1>;
        })}
      </div>
    </div>
  );
}
