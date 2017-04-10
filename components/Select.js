import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './Icon';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  iconDescription: PropTypes.string,
  hideLabel: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
  labelText: 'Select',
  iconDescription: 'open list of options',
};

const Select = ({ className, id, labelText, disabled, children, iconDescription, hideLabel, ...other }) => {
  const selectClasses = classNames({
    'bx--select': true,
    [className]: className,
  });
  const labelClasses = classNames('bx--label', { 'bx--visually-hidden': hideLabel });
  return (
    <div className="bx--form-item">
      <label htmlFor={id} className={labelClasses}>{labelText}</label>
      <div className={selectClasses}>
        <select
          {...other}
          id={id}
          className="bx--select-input"
          disabled={disabled}
        >
          {children}
        </select>
        <Icon name="caret--down" className="bx--select__arrow" description={iconDescription} />
      </div>
    </div>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
