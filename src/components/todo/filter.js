import React from 'react';
import {connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../../constants';
import { setFilter } from '../../redux/actions';
import { countTodos } from '../../redux/selectors';

const Filter = ({activeFilter, setFilter,count}) => {
    return (
        <div className="row my-3">
            {
                Object.keys(VISIBILITY_FILTERS).map(filterKey=>{
                    const currentFilter = VISIBILITY_FILTERS[filterKey];
                    return (
                        <div className="col-3 mx-auto" key={filterKey}>
                            <button onClick={()=>{setFilter(currentFilter)}} type="button" className={`btn btn-${activeFilter==currentFilter?'success':'primary'}`}>
                                {currentFilter}
                                {currentFilter==VISIBILITY_FILTERS.ALL?<span> ({count.all})</span>:''}
                                {currentFilter==VISIBILITY_FILTERS.COMPLETED?<span> ({count.complete})</span>:''}
                                {currentFilter==VISIBILITY_FILTERS.INCOMPLETE?<span> ({count.pending})</span>:''}
                                </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    const count = countTodos(state);
    return {activeFilter: state.visibilityFilter, count };
}

export default connect(mapStateToProps, {setFilter})(Filter);