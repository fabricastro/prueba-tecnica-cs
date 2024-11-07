import React from 'react';

interface TextContentProps {
    text?: string;
    question?: string;
    userName?: string;
}

const renderTextWithBold = (text: string, userName: string = "Juan") => {
    const processedText = text.replace("**Juan**", `**${userName}**`);
    const parts = processedText.split(/(\*\*[^*]+\*\*)/);

    return parts.map((part, index) =>
        part.startsWith('**') && part.endsWith('**') ? (
            <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
            part
        )
    );
};

const TextContent: React.FC<TextContentProps> = ({ text, question, userName }) => (
    <>
        {text && <p>{renderTextWithBold(text, userName)}</p>}
        {question && <p>{question}</p>}
    </>
);

export default TextContent;
