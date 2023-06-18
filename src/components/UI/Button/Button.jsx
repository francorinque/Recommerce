import { ButtonStyled } from './ButtonStyled'

const Button = ({ children, onClick, w, h, secundary, disabled, warning }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      w={w}
      h={h}
      secundary={secundary}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: 3 }}
      disabled={disabled}
      warning={warning}
    >
      {children}
    </ButtonStyled>
  )
}
export default Button
