import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from 'recompose';
import { fetchPosts } from "../actions";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
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

        this.state = { minNum:0, maxNum:9999999, minDate:0, maxDate: new Date() };
    }

    getData(rule) {
        this.props.fetchPosts(this.props.perPage,this.props.page,this.props.sortBy,this.props.criteria,rule);
    }

    applyFilter = (operation,filter) => event => {
        var rule = [operation,filter,event.target.value];
        if(!event.target.value){
            this.getData('');
        }else{
            this.getData(rule);
        }
    }

    applyFilterMinNum = (operation,filter) => event => {
        if(!event.target.value){
            var minNum=0;
        }else{
            var minNum=event.target.value;
        }

        this.setState({minNum: minNum});
        var rule = [operation,filter,minNum,this.state.maxNum];
        this.getData(rule);
    }

    applyFilterMaxNum = (operation,filter) => event => {
        if(!event.target.value){
            var maxNum=9999999;
        }else{
            var maxNum=event.target.value;
        }

        this.setState({maxNum: maxNum});
        var rule = [operation,filter,this.state.minNum,maxNum];
        this.getData(rule);
    }

    applyFilterMinDate = (operation,filter) => event => {
        if(!event.target.value){
            var minDate=0;
        }else{
            var minDate=event.target.value;
        }

        this.setState({minDate: minDate});
        var rule = [operation,filter,minDate,this.state.maxDate];
        this.getData(rule);
    }

    applyFilterMaxDate = (operation,filter) => event => {
        if(!event.target.value){
            var maxDate=new Date();
        }else{
            var maxDate=event.target.value;
        }
        this.setState({maxDate: maxDate});
        var rule = [operation,filter,this.state.minDate,maxDate];
        this.getData(rule);
    }

    applyFilterMaxDate = (operation,filter) => event => {
        if(!event.target.value){
            var maxDate=new Date();
        }else{
            var maxDate=event.target.value;
        }
        this.setState({maxDate: maxDate});
        var rule = [operation,filter,this.state.minDate,maxDate];
        this.getData(rule);
    }

    removeFilter(name){
        var rule = ['remove',name];
        this.getData(rule);
        this.props.passFilter(name);
    }

    renderFilters() {
        return _.map(this.props.filters, filter => {
            switch (filter.input) {
                case 'text':
                    return (
                        <form key={filter.name} className="filter-chip text" noValidate autoComplete="off">
                            <TextField
                              placeholder={filter.name}
                              className={styles.textField}
                              onChange={ this.applyFilter(filter.operation,filter.name) }
                              margin="normal"
                            />
                            <CloseIcon className="close-icon" onClick={() => this.removeFilter(filter.name)} />
                        </form>
                    );
                break;

                case 'range':
                    return (
                        <form key={filter.name} className="filter-chip range" noValidate autoComplete="off">
                            <Input
                                placeholder="Min"
                                inputProps={{
                                  'aria-label': 'Description',
                                }}
                                onChange={ this.applyFilterMinNum(filter.operation,filter.name) }
                            /> -
                            <Input
                                placeholder="Max"
                                inputProps={{
                                  'aria-label': 'Description',
                                }}
                                onChange={ this.applyFilterMaxNum(filter.operation,filter.name) }
                            />
                            <CloseIcon className="close-icon" onClick={() => this.removeFilter(filter.name)} />
                        </form>
                    );
                break;

                case 'datepicker':
                    return (
                        <form key={filter.name} className="filter-chip date" noValidate autoComplete="off">
                        <TextField
                            onChange={ this.applyFilterMinNum(filter.operation,filter.name) }
                            id={filter.name}
                            label="Min Date"
                            type="date"
                            defaultValue="1990-01-01"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          <TextField
                            onChange={ this.applyFilterMaxDate(filter.operation,filter.name) }
                            id={filter.name}
                            label="Max Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          <CloseIcon className="close-icon" onClick={() => this.removeFilter(filter.name)} />
                        </form>
                    );
                break;

                case 'select':
                    return (
                        <form key={filter.name} className="filter-chip select" noValidate autoComplete="off">
                            <TextField
                            select
                            onChange={ this.applyFilter(filter.operation,filter.name) }
                            >
                                {filter.values.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <CloseIcon className="close-icon" onClick={() => this.removeFilter(filter.name)} />
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
