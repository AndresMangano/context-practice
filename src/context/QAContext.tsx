import { createContext, ReactNode, useState } from "react";

export type QAContextProviderType = {
    children: ReactNode
}

export type QAContextTypeItem = {
    question: string;
    answer: string;
}

/* export type QAContextType = {
    qaItems: QAContextTypeItem[];
    AddQA: (question: string, answer: string) => void;
    RemoveQA: (index: number) => void;
} */

export const defaultArray = [ 
    {
        question: 'How far away is the Moon from the Earth?',
        answer: 'The moon is around 384,400KM away from Earth'
    },
    {
        question: 'What is the biggest mountain in the world?',
        answer: 'The biggest mountain in the world is Mt. Everest located in Nepal'
    }
]


export const QAContext = createContext<any>(defaultArray)

export function QAContextProvider({children}: QAContextProviderType) {
    const [qaItems, setQAItems] = useState<QAContextTypeItem[]>(defaultArray)

    const AddQA = (question: string, answer: string) => {
        setQAItems([...qaItems, {question, answer}])
    }

    const RemoveQA = (index: number) => {
        setQAItems(qaItems.filter((_, i) => i !== index))
    }

    return (
        <QAContext.Provider value={{qaItems, AddQA, RemoveQA}}>
            {children}
        </QAContext.Provider>
    )
} 