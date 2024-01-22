import "./CustomButton.css";

export const CustomButton = ({children}: React.PropsWithChildren) => {
  return (
    <button>{children}</button>
  )
}
