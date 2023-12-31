import { createContext, useContext, useState } from 'react'

const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [category, setCategory] = useState(null)
  const [subcategory, setSubcategory] = useState(null)

  const setPage = (page) => setCurrentPage(page)

  const setCategoryAndResetPage = (newCategory) => {
    setCategory(newCategory)
    setCurrentPage(1)
  }

  const setSubcategoryAndResetPage = (newSubcategory) => {
    setSubcategory(newSubcategory)
    setCurrentPage(1)
  }

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        setPage,
        category,
        setCategory: setCategoryAndResetPage,
        subcategory,
        setSubcategory: setSubcategoryAndResetPage
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => {
  return useContext(NavigationContext)
}
