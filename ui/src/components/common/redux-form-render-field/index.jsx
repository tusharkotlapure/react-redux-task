import React, { Component } from 'react';

export default class renderField extends Component {
	render(){
		const {
			input,
			label,
			type,
			addErrorClass,
			fieldWrapperClass,
			placeholder,
			readOnly,
			disabled,
			meta: { touched, error, warning }
		}= this.props;

		return(
			<div className={fieldWrapperClass || undefined}>
				{
					label ?
        		<label>{label}</label>
					:null
				}
        <div>
          <input
          	{...input}
          	readOnly={readOnly}
          	disabled={disabled}
          	placeholder={placeholder || label }
          	type={type}
          	autoCapitalize={this.props.autocapitalize ? this.props.autocapitalize : undefined}
          	className={addErrorClass && touched && (error || warning ) ? addErrorClass : undefined }/>
          {
          	touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))
          }
        </div>
      </div>
		);
	}
}
