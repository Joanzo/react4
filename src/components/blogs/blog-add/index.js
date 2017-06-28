import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, withRouter} from 'react-router-dom';

import {addBlog} from './action';


class BlogAdd extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    onSubmit(values) {
        this.props.addBlog(values, () => {
            console.log(this.props.history);
            this.props.history.push('/blogs');
        });
    }
    renderField(field) {
        const { meta: {touched, error} } = field;

        let labelElement = null;
        if (field.label) {
            labelElement = <label htmlFor={field.id}>{field.label}</label>
        }

        let fieldElement = null;
        let fieldElementClass = `${field.className} ${touched && error ? 'form-control-danger' : ''}`;
        switch(field.element) {
            case 'input': 
                fieldElement = <input type={field.type} id={field.id} className={fieldElementClass} placeholder={field.placeholder} {...field.input} />
                break;
            case 'textarea': 
                fieldElement = <textarea id={field.id} className={field.className} rows={field.rows}  {...field.input} />
                break;
        }

        let errorElement = null;
        if (touched && error) {
            errorElement = <small className="form-text text-muted text-danger">{error}</small>
        }

        let formGroupClass = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (
            <div className={formGroupClass}>
                {labelElement}
                {fieldElement}
                {errorElement}
            </div>
        );
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field component={this.renderField} label="Title" name="title" element="input"
                    id="blog-title-form" type="text" className="form-control" placeholder="Title"/>

                <Field component={this.renderField} name="categories" label="Categories" element="input"
                    type="text" id="blog-categories-form" className="form-control" placeholder="Categories"/>                            

                <Field component={this.renderField} name="content" label="Content" element="textarea" 
                className="form-control" id="blog-content-form" rows="5" />

                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                <Link className="btn btn-secondary" to="/">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = 'Enter a title!';
    } else if (values.title.length < 3) { 
        errors.title = 'Title must more than 3 characters!';
    }

    // Validate the inputs from 'values'
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }

    // Validate the inputs from 'values'
    if (!values.content) {
        errors.content = 'Enter some content please';
    }

    // if errors is empty, the form is fine to submit
    // If errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'AddNewBlog'
})(
    withRouter(connect(null,{addBlog}) (BlogAdd))
);