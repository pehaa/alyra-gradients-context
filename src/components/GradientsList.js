import Gradient from "./Gradient"
import { gradients } from "../gradients"

const GradientsList = (props) => {
  const { filter, setFilter } = props
  const list = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end, tags = [] } = el
        return (
          <Gradient
            key={name}
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
