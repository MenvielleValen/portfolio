import "./CustomButton.css";

interface IProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: React.CSSProperties
}

export const CustomButton = ({
  children,
  onClick,
  style = {}
}: React.PropsWithChildren<IProps>) => {
  return <button className="customButton" onClick={onClick} style={{...style}}>{children}</button>;
};
