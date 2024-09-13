import { Link ,Outlet} from 'react-router-dom'

const Pages = () => {
    const prof=[1,2,3]
  return (
    <>
    <div>
      <h1>Pages</h1>
      {prof.map((i)=>(
        <Link key={i} to={`/Pages/${i}`}>Profile no: {i}</Link>
      )
      )}
      </div>
        <Outlet/>
    </>
  
  )
}

export default Pages
