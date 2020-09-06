import React from "react"
import Gradient from "./Gradient"

const GradientsList = (props) => {
  const { list } = props
  return (
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end } = el
        return (
          <Gradient
            key={el.name}
            colorStart={start}
            colorEnd={end}
            name={name}
          />
        )
      })}
    </ul>
  )
}

export default GradientsList
