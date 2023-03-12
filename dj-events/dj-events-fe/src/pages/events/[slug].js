import { useRouter } from "next/router"


function DynamicSlug() {
const router = useRouter()


  return (
    <div>
      <h1>My dynamic event</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={()=> router.push("/")}>click</button>
    </div>
  )
}

export default DynamicSlug
