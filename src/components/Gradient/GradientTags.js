const GradientTags = ({ tags, filter, setFilter }) => {
  return (
    <div className="mt-3">
      {tags.sort().map((el) => {
        const className = filter === el ? "bg-light" : "bg-dark text-white"
        return (
          <button
            key={el}
            type="button"
            className={`btn btn-sm mr-2 mb-2 ${className}`}
            disabled={filter === el}
            onClick={() => setFilter(el)}
          >
            {el}
          </button>
        )
      })}
    </div>
  )
}

export default GradientTags
