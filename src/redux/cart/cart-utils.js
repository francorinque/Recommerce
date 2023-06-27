const incrementQuantity = ({ arr, id }) => {
  return arr.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  )
}

export const handleAddToCart = ({ arr, newProduct }) => {
  let alreadyExist = arr.find((item) => item.id === newProduct.id)

  if (alreadyExist) {
    return incrementQuantity({ arr: arr, id: alreadyExist.id })
  }

  let product = {
    ...newProduct,
    quantity: 1,
  }

  return [...arr, product]
}

//remove
const confirmDelete = () => {
  return window.confirm("you're sure ?")
}

export const handleRemoveFromCart = ({ arr, productId }) => {
  let itemToDelete = arr.find((item) => item.id === productId)

  return itemToDelete.quantity > 1
    ? arr.map((item) =>
        item.id === itemToDelete.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    : confirmDelete()
    ? arr.filter((item) => item.id !== productId)
    : arr
}

//remove all
export const handleClearCart = ({ arr }) => {
  return confirmDelete() ? [] : arr
}
