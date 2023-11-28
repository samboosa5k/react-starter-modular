import { FC } from 'react';

export const Button: FC<{ text: string, onClick: () => void }> = ({ text, onClick }) =>
    <button onClick={onClick}>{text}</button>;
