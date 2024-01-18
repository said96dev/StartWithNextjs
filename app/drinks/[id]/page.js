import Link from 'next/link'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
import Image from 'next/image'

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`)

  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

const page = async ({ params }) => {
  const data = await getSingleDrink(params.id)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded shadow-lg mb-4"
        priority
        alt=""
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  )
}

export default page
