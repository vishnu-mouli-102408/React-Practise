import { Outlet } from "react-router-dom"
import Profile from "./Profile"


const About = () => {
  return (
    <div className="container">
      <h1>About Us page</h1>
      <h2>This is the About Us page </h2>
      <Profile name="Mouli"/>
    </div>
  )
}

export default About
