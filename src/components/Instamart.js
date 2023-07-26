import { useState } from "react";

const Section = ({title, desc, isVisible, setIsVisible}) =>{
  return (
    <div className="border border-black p-3 m-3">
      <h1 className="font-bold text-xl">{title}</h1>
      {isVisible ? <button className="cursor-pointer underline" onClick={()=> setIsVisible(false)}>Hide</button> :<button className="cursor-pointer underline" onClick={()=> setIsVisible(true)}>Show</button> }
      
      {isVisible && <h2>{desc}</h2>}
    </div>
  )
}


const Instamart = () => {
  const [visibleSection , setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section isVisible={visibleSection === "about"} setIsVisible={()=>  setVisibleSection(visibleSection === "about" ? "" : "about")} title={"About Instamart"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum metus vitae sem tristique tempus. Nunc metus enim, rutrum quis tempor eu, sodales sed mi. Sed lobortis vehicula nunc, id vulputate risus ullamcorper nec. Proin quis porta lacus. Donec congue suscipit dui, quis gravida purus eleifend ut. Cras finibus mollis lectus, et finibus turpis. Suspendisse fringilla vulputate ex eu sollicitudin. Nullam convallis diam vitae purus hendrerit, a mattis nulla scelerisque. In pellentesque lacus lorem, ac efficitur lacus posuere ac. Sed tristique ex at cursus tristique. Mauris imperdiet scelerisque elit, at mattis justo aliquam et. Pellentesque maximus iaculis sapien ac sodales. Fusce lacinia, ex a blandit vehicula, turpis lorem sollicitudin justo, id sagittis tellus arcu sed elit. Aenean et tempor risus, ullamcorper laoreet lectus."}/>
      <Section isVisible={visibleSection === "career"} setIsVisible={()=> setVisibleSection(visibleSection === "career" ? "" : "career")} title={"Career Instamart"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum metus vitae sem tristique tempus. Nunc metus enim, rutrum quis tempor eu, sodales sed mi. Sed lobortis vehicula nunc, id vulputate risus ullamcorper nec. Proin quis porta lacus. Donec congue suscipit dui, quis gravida purus eleifend ut. Cras finibus mollis lectus, et finibus turpis. Suspendisse fringilla vulputate ex eu sollicitudin. Nullam convallis diam vitae purus hendrerit, a mattis nulla scelerisque. In pellentesque lacus lorem, ac efficitur lacus posuere ac. Sed tristique ex at cursus tristique. Mauris imperdiet scelerisque elit, at mattis justo aliquam et. Pellentesque maximus iaculis sapien ac sodales. Fusce lacinia, ex a blandit vehicula, turpis lorem sollicitudin justo, id sagittis tellus arcu sed elit. Aenean et tempor risus, ullamcorper laoreet lectus."}/>
      <Section isVisible={visibleSection === "mouli"} setIsVisible={()=> setVisibleSection(visibleSection === "mouli" ? "" : "mouli")} title={"Mouli Instamart"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum metus vitae sem tristique tempus. Nunc metus enim, rutrum quis tempor eu, sodales sed mi. Sed lobortis vehicula nunc, id vulputate risus ullamcorper nec. Proin quis porta lacus. Donec congue suscipit dui, quis gravida purus eleifend ut. Cras finibus mollis lectus, et finibus turpis. Suspendisse fringilla vulputate ex eu sollicitudin. Nullam convallis diam vitae purus hendrerit, a mattis nulla scelerisque. In pellentesque lacus lorem, ac efficitur lacus posuere ac. Sed tristique ex at cursus tristique. Mauris imperdiet scelerisque elit, at mattis justo aliquam et. Pellentesque maximus iaculis sapien ac sodales. Fusce lacinia, ex a blandit vehicula, turpis lorem sollicitudin justo, id sagittis tellus arcu sed elit. Aenean et tempor risus, ullamcorper laoreet lectus."}/>
    </div>
  )
}

export default Instamart
