import React from 'react';
import FilterButton from '../Components/FilterButton';
import { AVAILABLE_FILTERS } from '../Actions/Todo.actions';

const Footer = () => {
    return (
        <footer>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ALL}>All</FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ACTIVE}>Active</FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_COMPLETE}>Completed</FilterButton>
        </footer>
    )
};

export default Footer;