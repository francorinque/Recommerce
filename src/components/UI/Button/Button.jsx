import { ButtonStyled } from './ButtonStyled'

const Button = ({ children, onClick, w, h, secundary, disabled }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      w={w}
      h={h}
      secundary={secundary}
      whileTap={{ scale: 0.95 }}
      whileHover={{ x: 3 }}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  )
}
export default Button
