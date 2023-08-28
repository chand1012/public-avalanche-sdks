import { type LucideProps } from 'lucide-react';
export const CoreIcon = ({ size, ...rest }: LucideProps) => {
  return (
    <svg
      stroke="#FFF"
      fill="#FFF"
      stroke-width="0"
      version="1.1"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M21.2 4.5v-1h-3c-1.2 0-2.3.4-3.2 1.2-.8-.7-1.9-1.2-3.2-1.2h-3v1C7.8 5.4 7 6.8 7 8.3s.7 2.8 1.8 3.7L1 19.1c1.9.9 4.1 1.4 6.5 1.4 2.1 0 4.1-.4 5.9-1.1h3.7v-2.2c1.5-1.3 2.6-2.8 3.1-4.5 1.6-.8 2.8-2.4 2.8-4.4 0-1.5-.7-2.9-1.8-3.8zm-3 7.5c-.9 0-1.7-.3-2.3-.8L15 13l-.8-1.9c-.6.5-1.4.8-2.3.8-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c1.3 0 2.5.7 3.2 1.8.7-1.1 1.8-1.8 3.2-1.8 2 0 3.7 1.7 3.7 3.7-.1 2.1-1.8 3.8-3.8 3.8z"></path>
      <path d="M11.9 5.7c-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6c1.4 0 2.6-1.2 2.6-2.6s-1.2-2.6-2.6-2.6zm0 4.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM18.2 5.7c-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6c1.4 0 2.6-1.2 2.6-2.6s-1.2-2.6-2.6-2.6zm0 4.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"></path>
    </svg>
  );
};