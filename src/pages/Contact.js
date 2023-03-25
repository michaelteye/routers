import { useLocation } from "react-router-dom"

export default function Contact() {
    const queryString = useLocation().search
    console.log(queryString)

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")
  return (
    <div>
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tenetur es
            t doloribus, cupiditate quisquam fuga aperiam repudiandae? Totam id provident
             obcaecati fuga ipsa veniam animi nisi natus adipisci, exercitationem aliquam!</p>
    </div>
  )
}
