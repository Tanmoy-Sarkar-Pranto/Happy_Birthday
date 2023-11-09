// import "./person.css"

const Person = (props) => {
  return (
    <div key={props.id} className="person">
      <ul>
        <img src={props.image} alt={props.name} className="img" />
        <span>
          <h4>{props.name}</h4>
        </span>
        <br />
        <p>
          <b>{props.age}</b> years old
        </p>
      </ul>
    </div>
  )
}
export default Person
