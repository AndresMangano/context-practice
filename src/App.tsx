import { useContext } from 'react';
import './App.css'
import { QAContext } from './context/QAContext';
import { QaCard } from './qa/QaCard';
import QaForm from './qa/QaForm';

type qaItemsType = {
    question: string;
    answer: string;
    onDelete: () => void;
}

function App() { 
  const {qaItems, RemoveQA} = useContext(QAContext)
  console.log('QAs', qaItems)

  return (
      <div className="container">
        <div className="container__form">
          <QaForm />
        </div>
          { qaItems !== undefined &&
            <div className='container__cards'>
              {qaItems.map((item: qaItemsType, index: number) =>
                  <QaCard key={item.question} question={item.question} answer={item.answer} onDelete={() => RemoveQA(index)}/>
              )}
            </div>
          }
      </div>
  );
}

export default App;