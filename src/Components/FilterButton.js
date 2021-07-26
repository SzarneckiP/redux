import React from 'react';
import { connect } from 'react-redux';

const FilterButton = ({ onClick, active, children }) => {
    return (
        <button
            style={{ borderColor: active ? 'green' : '', margin: 9, borderRadius: 5, width: 100, height: 35, fontFamily: "arial", fontSize: 15, cursor: 'pointer', background: '#95a5a6', color: active ? 'green' : 'white' }}
            onClick={onClick} disabled={active}>
            {children}
        </button>
    )
};

const mapStateToProps = (state, ownProps) => ({
    active: state.filter === ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch({
        type: "FILTER_TODO",
        filter: ownProps.filter,
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterButton);