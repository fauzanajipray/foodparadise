import React from 'react'

const CategoryList = (props) => (
    props.categories ? (
      <>
        <h5>Categories</h5>
        <div className="list-group">
          {props.categories.map(category => (
            <button className={"list-group-item list-group-item-action " +(props.categorySelected && props.categorySelected.id === category.id ? 'active': '')} 
              key={category.id}
              onClick={() => props.categoryClickHandler(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </>
    ) : (
      <p>Loading ...</p>
    )
) 

export default CategoryList;