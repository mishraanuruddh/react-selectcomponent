
/*
* Component designed to help select one or more components that match a given selection criteria
* The default selection criteria is if the name of the component matches the desired name
*
* Example usage : Selecting versions during AB experiments
*
* We can provide a fallback component which will be triggered if none of the components match the criteria
*
*
* */

const defaultKeyName = 'name';
const renderFallback = (fallback) => typeof fallback !== 'undefined' ? [fallback] : null;

const defaultCriteria =  (x,y) => x === y;

const SelectComponent = ({children, fallback, criteria, keyName, ...props}) => {

    const selectedKeyName = keyName || defaultKeyName;
    const key = props[selectedKeyName];

    if(typeof key === 'undefined' || typeof children === 'undefined') {
        return renderFallback(fallback);
    }

    const selectedCriteria = typeof criteria === 'undefined' ? defaultCriteria : criteria;

    const selectionFunction = (children,key) => children.filter(child => selectedCriteria(child.props[selectedKeyName], key));

    const selected = selectionFunction(children, key);
    if(selected.length === 0) {
        return renderFallback(fallback);
    }

    return selected;
}

export default SelectComponent;
