import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchLawmakers} from '../actions';

export class LawmakerSearch extends React.Component {
    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const lawmakers = this.props.lawmakers.map((lawmaker, index) =>
            <li key={index}>{lawmaker}</li>
        );

        return (
            <ul className="lawmaker-search-results">
                {lawmakers}
            </ul>
        );
    }

    //support function: start a search upon submission of the form
    search(e) {
        e.preventDefault();
        this.props.dispatch(searchLawmakers(this.input.value));
    }

    render() {
        return (
            <div className="lawmaker-search">
                <form onSubmit={(e) => this.search(e)}>
                    <input type="search" ref={input => this.input = input} />
                    <button>Search</button>
                </form>
                <ul className="lawmaker-search-results">
                    {this.renderResults()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lawmakers: state.lawmakers,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(LawmakerSearch);
