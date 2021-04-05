import Gradient from "./Gradient"

const GradientsList = (props) => {
  const { list, filter, setFilter } = props
  return (
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end, tags = [] } = el
        return (
          <Gradient
            key={el.name}
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
            filter={filter}
            setFilter={setFilter}
          />
        )
      })}
    </ul>
  )
}

export default GradientsList
