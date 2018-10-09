import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from 'recompose';
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import SearchBar from "../containers/search_bar";
import FilterBar from '../containers/filter_bar';
import fields from '../constants/fields';
import TablePaginationActions from "../components/pagination";

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import FilterListIcon from '@material-ui/icons/FilterList';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class PostsIndex extends Component {
    constructor(props){
        super(props);
        var filterName = '';

        this.state = { perPage:10, page:1, sortBy:'OBJECTID', criteria:true ,filter:'', filters:[] };
    }

    getData(){
        this.props.fetchPosts(this.state.perPage,this.state.page,this.state.sortBy,this.state.criteria,this.state.filter);
    }

    handleAddFilter(filter) {
        let index = this.state.filters.indexOf(filter);

        if (index < 0) {
            this.setState({
              filters: [...this.state.filters, filter]
          });
        }
    }

    componentDidMount() {
        this.getData();
    }

    handleChangePage = (event, page) => {
        this.setState({ page }, this.getData.bind(this));
    };

    handleChangeRowsPerPage = event => {
        this.setState({ perPage: event.target.value }, this.getData.bind(this));
    };

    handleChildClick(filterName) {
        var array = [...this.state.filters];
        var index = array.indexOf(filterName);
        array.splice(index, 1);
        this.setState({filters: array});
    }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
          <TableRow key={post.OBJECTID}>
              <TableCell component="th" scope="row"><Link to={`/posts/${post.ADDRESS_ID}`}>{post.OBJECTID}</Link></TableCell>
              <TableCell>{post.SSL}</TableCell>
              <TableCell>{post.ASSESSOR_NAME}</TableCell>
              <TableCell>{post.LAND_USE_CODE}</TableCell>
              <TableCell>{post.LAND_USE_DESCRIPTION}</TableCell>
              <TableCell>{post.LANDAREA}</TableCell>
              <TableCell>{post.PROPERTY_ADDRESS}</TableCell>
              <TableCell>{post.OTR_NEIGHBORHOOD_CODE}</TableCell>
              <TableCell>{post.OTR_NEIGHBORHOOD_NAME}</TableCell>
              <TableCell>{post.OWNER_NAME_PRIMARY}</TableCell>
              <TableCell>{post.CAREOF_NAME}</TableCell>
              <TableCell>{post.OWNER_ADDRESS_LINE1}</TableCell>
              <TableCell>{post.OWNER_ADDRESS_LINE2}</TableCell>
              <TableCell>{post.OWNER_ADDRESS_CITYSTZIP}</TableCell>
              <TableCell>{post.APPRAISED_VALUE_BASEYEAR_LAND}</TableCell>
              <TableCell>{post.APPRAISED_VALUE_BASEYEAR_BLDG}</TableCell>
              <TableCell>{post.APPRAISED_VALUE_PRIOR_LAND}</TableCell>
              <TableCell>{post.APPRAISED_VALUE_PRIOR_IMPR}</TableCell>
              <TableCell>{post.APPRAISED_VALUE_PRIOR_TOTAL}</TableCell>
              <TableCell>{post.APPRAISED_VALUE_CURRENT_LAND}</TableCell>
              <TableCell>{post.APPRAISED_VALUE_CURRENT_IMPR}</TableCell>
              <TableCell>{post.APPRAISED_VALUE_CURRENT_TOTAL}</TableCell>
              <TableCell>{post.PHASEIN_VALUE_CURRENT_LAND}</TableCell>
              <TableCell>{post.PHASEIN_VALUE_CURRENT_BLDG}</TableCell>
              <TableCell>{post.VACANT_USE}</TableCell>
              <TableCell>{post.HOMESTEAD_DESCRIPTION}</TableCell>
              <TableCell>{post.TAX_TYPE_DESCRIPTION}</TableCell>
              <TableCell>{post.TAXRATE}</TableCell>
              <TableCell>{post.MIXED_USE}</TableCell>
              <TableCell>{post.OWNER_OCCUPIED_COOP_UNITS}</TableCell>
              <TableCell>{post.LAST_SALE_PRICE}</TableCell>
              <TableCell>{post.LAST_SALE_DATE}</TableCell>
              <TableCell>{post.DEED_DATE}</TableCell>
              <TableCell>{post.CURRENT_ASSESSMENT_CAP}</TableCell>
              <TableCell>{post.PROPOSED_ASSESSMENT_CAP}</TableCell>
              <TableCell>{post.OWNER_NAME_SECONDARY}</TableCell>
              <TableCell>{post.ADDRESS_ID}</TableCell>
              <TableCell>{post.LASTMODIFIEDDATE}</TableCell>
        </TableRow>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="container">
        <SearchBar />
        <FilterBar
            passFilter={ filterName => this.handleChildClick(filterName) }
            filters={this.state.filters}
            perPage={this.state.perPage}
            page={this.state.page}
            sortBy={this.state.sortBy}
            criteria={this.state.criteria}
            filter={this.state.filter}
        />
        <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                    {fields.map(field => {
                      return (
                          <TableCell key={field.name}>
                          <FilterListIcon onClick={() => this.handleAddFilter(field)} /><span>{field.name}</span></TableCell>
                      );
                    })}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.renderPosts()}
              </TableBody>
              <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={1000}
                  rowsPerPage={this.state.perPage}
                  page={this.state.page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
            </Table>
          </Paper>
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
)(PostsIndex);
