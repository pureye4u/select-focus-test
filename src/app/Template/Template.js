import React from 'react';

const styles = {
    template: {
        textAlign: 'center',
        paddingTop: 200,
    },
};

class Template extends React.Component {

    keyDidDown = (event) => {
        if(event.keyCode == 13) {
            this.refs.selectField.focus();
        }
    }

    selectFieldOnFocus = (event) => {
        let selectField = event.currentTarget;
        let options = selectField.options;
        selectField.setAttribute("size", options.length);
    }

    selectFieldOnBlur = (event) => {
        event.currentTarget.size = 1;
    }

    render() {
        return (
            <div style={styles.template}>
                <input type="text" onKeyDown={this.keyDidDown} />
                <select ref="selectField" onFocus={this.selectFieldOnFocus} onBlur={this.selectFieldOnBlur}>
                    <option>1</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        );
    }
}

export default Template;
