import { useState } from "react"
import { gradients, uniqueTags as allTags } from "../gradients"
import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = () => {
  const [filter, setFilter] = useState("all")
  const displayedList = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <>
      <GradientsSelect tags={allTags} filter={filter} setFilter={setFilter} />
      <GradientsList
        list={displayedList}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  )
}

export default Gradients
