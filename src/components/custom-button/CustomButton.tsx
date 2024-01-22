import "./CustomButton.css";

interface IProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const CustomButton = ({children, onClick}: React.PropsWithChildren<IProps>) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
