import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from 'recompose';
import { fetchPosts } from "../actions";

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 50,
    },
});

class FilterBar extends Component {

    constructor(props) {
        super(props);
    }

    getData() {
        this.props.fetchPosts(this.props.perPage,this.props.page,this.props.sortBy,this.props.criteria,this.props.filter);
    }

    handleChange = prop => event => {
        console.log('hola')
        this.getData();
    };

    renderFilters() {
        return _.map(this.props.filters, filter => {
            switch (filter.input) {
                case 'text':
                    return (
                        <form key={filter.name} className="filter-chip" noValidate autoComplete="off">
                            <TextField
                              label={filter.name}
                              placeholder="Enter to search"
                              className={styles.textField}
                              margin="normal"
                            />
                        </form>
                    );
                break;

                case 'range':
                    return (
                        <form key={filter.name} className="filter-chip" noValidate autoComplete="off">
                            <Input
                                placeholder="Placeholder"
                                inputProps={{
                                  'aria-label': 'Description',
                                }}
                            />
                            <Input
                                placeholder="Placeholder"
                                inputProps={{
                                  'aria-label': 'Description',
                                }}
                            />
                        </form>
                    );
                break;

                case 'datepicker':
                    return (
                        <form key={filter.name} className="filter-chip" noValidate autoComplete="off">
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </form>
                    );
                break;

                case 'select':
                    return (
                        <form key={filter.name} className="filter-chip" noValidate autoComplete="off">
                            <TextField
                            select
                            label="Select Option"
                            onChange={this.handleChange()}
                            >
                                {filter.values.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </form>
                    );
                break;
            }
        });
    }

    render() {
        const { classes } = this.props;

        return (
          <div className="container">
            {this.renderFilters()}
          </div>
      );
    }
}

function mapStateToProps(state) {
  return {posts: state.posts};
}

export default compose(
  connect(mapStateToProps, { fetchPosts }),
  withStyles(styles)
)(FilterBar);
