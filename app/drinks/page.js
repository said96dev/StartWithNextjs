import Drinkslist from '../components/Drinkslist'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrniks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const res = await fetch(url)
  //throw error if
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const data = await res.json()
  return data
}

const DrinksPage = async () => {
  const data = await fetchDrniks()

  return (
    <div>
      <Drinkslist drinks={data.drinks} />
    </div>
  )
}

export default DrinksPage
