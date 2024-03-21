import { Outlet } from "react-router-dom"
import Layout from "./Layouts/Layout"
function App() {
console.log("render app")
  return (
    <>
   <Layout
    child={<Outlet/>}/>
    </>
  )
}

export default App
