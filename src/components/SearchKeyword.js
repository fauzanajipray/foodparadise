import React from 'react'

const SearchKeyword = (props) => (
    <>
    <h5>Keyword</h5>
    <div className="card">
        <div className="card-body">
            <div className="form-row">
                <div className="col-12 col-sm-8 col-md-10">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Type keyword i.e : restaurant's name, location, cuisine, etc."
                    value={props.keyword}
                    onChange={props.changeKeywordHandler}
                />
                </div>
                <div className="col-12 col-sm-4 col-md-2">
                <button
                    className="btn btn-primary btn-block"
                    type="button"
                    onClick={props.onClickAddToCriteria}
                    
                >
                    Add to criteria
                </button>
                </div>
            </div>
        </div>
    </div>
    </>
)

export default SearchKeyword;