import GradientTagButton from "./GradientTagButton"

const GradientTags = ({ tags }) => {
  return (
    <div className="mt-3">
      {tags.sort().map((el) => {
        return (
          <GradientTagButton
            key={el}
            tag={el}
          />
        )
      })}
    </div>
  )
}

export default GradientTags
