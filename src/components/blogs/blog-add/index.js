import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class BlogAdd extends Component {
    constructor(props) {
        super(props);
    }
    onSubmit(values) {
        console.log(values);
    }
    renderField(field) {
        let label = null;
        if (field.label) {
            label = <label htmlFor={field.id}>{field.label}</label>
        }

        let element = null;
        switch(field.element) {
            case 'input': 
                element = <input type={field.type} id={field.id} className={field.className} placeholder={field.placeholder} {...field.input} />
                break;
            case 'textarea': 
                element = <textarea id={field.id} className={field.className} rows={field.rows}  {...field.input} />
                break;
        }

        let error = null;
        if (field.meta.error) {
            error = <small className="form-text text-muted text-danger">{field.meta.error}</small>
        }

        return (
            <div>
                {label}
                {element}
                {error}
            </div>
        );
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-group">
                    <Field component={this.renderField} label="Title" name="title" element="input"
                     id="blog-title-form" type="text" className="form-control" placeholder="Title"/>
                </div>
                <div className="form-group">
                    <Field component={this.renderField} name="categories" label="Categories" element="input"
                      type="text" id="blog-categories-form" className="form-control" placeholder="Categories"/>                 
                </div>
                <div className="form-group">
                    <Field component={this.renderField} name="content" label="Content" element="textarea" 
                    className="form-control" id="blog-content-form" rows="5" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
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
})(BlogAdd);