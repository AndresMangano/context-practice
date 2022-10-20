import './QaCard.css'

type QaCardProps = {
    question: string,
    answer: string,
    onDelete: () => void;
}

export function QaCard({question, answer, onDelete}: QaCardProps) {
    return  (
        <div className='card'>
            <div className='card__header'>
                <span className='card__question'>{question}</span>
            </div>
            <div className='card__body'>
                <span className='card__answer'>{answer}</span>
            </div>
            <button className='card__button' onClick={onDelete}>Remove</button>
        </div>
    )
}