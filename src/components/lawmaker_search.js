import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchLawmakers} from '../actions';
import PickSwitch from './pick_switch';

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
            <div className="results-area">
                <div className="lawmaker-count">Number of matching lawmakers: {lawmakers.length}</div>
                <ul className="lawmaker-search-results">
                    {lawmakers}
                </ul>
            </div>
        );
    }

    //searchLawmakers below takes an input that is an object of search fields, 
    //obtained from the PickSwitches selections (eg: {gunControl: 100, proLife: 0})
    render() {
        return (
            <div className="lawmaker-search">
                <PickSwitch 
                    title="Gun control" 
                    onChange={(e) => this.props.dispatch(searchLawmakers({"gunControl": e}))} />
                <PickSwitch 
                    title="Pro life" 
                    onChange={(e) => this.props.dispatch(searchLawmakers({"proLife": e}))} />
                <PickSwitch 
                    title="Gay marriage" 
                    onChange={(e) => this.props.dispatch(searchLawmakers({"gayMarriage": e}))} />
                <PickSwitch 
                    title="Clean energy" 
                    onChange={(e) => this.props.dispatch(searchLawmakers({"cleanEnergy": e}))} />
                <PickSwitch 
                    title="Small government" 
                    onChange={(e) => this.props.dispatch(searchLawmakers({"smallGovernment": e}))} />

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
