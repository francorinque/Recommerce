import { ButtonStyled } from './ButtonStyled'

const Button = ({ children, onClick, w, h, secundary }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      w={w}
      h={h}
      secundary={secundary}
      whileTap={{ scale: 0.95 }}
      whileHover={{ x: 3 }}
    >
      {children}
    </ButtonStyled>
  )
}
export default Button
