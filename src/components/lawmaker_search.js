import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchLawmakers} from '../actions';
import PickSwitch from './pick_switch';
import SenatorCard from './senator_card';
import './lawmaker_search.css';

export class LawmakerSearch extends React.Component {
    constructor(props) {
        super(props);
        //TODO: change this. Added this state to the state in the store, which is converted to props below
        this.state = {
            searchObject: {
                //0=anti; 1=indifferent; 2=pro
                gunControl: 1, 
                proLife: 1, 
                gayMarriage: 1, 
                cleanEnergy: 1, 
                smallGovernment: 1
            }
        }
    }

    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const lawmakers = this.props.lawmakers.map((lawmaker, index) =>
            <SenatorCard lawmaker={lawmaker}/>
        );
        // console.log(this.props.lawmakers);

        let matchCount = (lawmakers.length === 0) ? "" : lawmakers.length;

        return (
            <div className="results-area">
                <div className="lawmaker-count">Matching lawmakers: {matchCount}</div>
                <div className="result-sort-message"><i>Showing highest re-election risk first</i></div>
                <div className="lawmaker-search-results">
                    {lawmakers}
                </div>
            </div>
        );
    }
    
    //updating the search string for the API request, with every change to ANY pickSwitch
    updateSearchObject(key, value) {
        //using setState is the proper way to do this: this.state.searchObject.smallGovernment = value;
        this.setState({searchObject: Object.assign(this.state.searchObject, {[key] : value}) }) 
    }

    //searchLawmakers below takes an input that is an object of search fields, 
    //obtained from the PickSwitches selections (eg: {gunControl: 100, proLife: 0})
    //It returns an updated state with the new lawmaker results (dispatched via actions file)
    render() {
        return (
            <div className="lawmaker-search">
                <div className="upper-arrows-container">
                    &#9664; Oppose &#11835; Support &#9654;
                </div>
                <PickSwitch 
                    title="Gun control" 
                    onChange={(e) => { 
                        this.updateSearchObject("gunControl", e);
                        this.props.dispatch(searchLawmakers(this.state.searchObject))
                        }
                    } 
                />
                <PickSwitch 
                    title="Pro life" 
                    onChange={(e) => { 
                        this.updateSearchObject("proLife", e);
                        this.props.dispatch(searchLawmakers(this.state.searchObject))
                        }
                    } 
                />
                <PickSwitch 
                    title="LGBTQ rights" 
                    onChange={(e) => {
                        this.updateSearchObject("gayMarriage", e);
                        this.props.dispatch(searchLawmakers(this.state.searchObject))
                        }
                    } 
                />
                <PickSwitch 
                    title="Clean energy" 
                    onChange={(e) => {
                        this.updateSearchObject("cleanEnergy", e);                        
                        this.props.dispatch(searchLawmakers(this.state.searchObject))
                        }
                    } 
                />
                <PickSwitch 
                    title="Small government" 
                    onChange={(e) => {
                        this.updateSearchObject("smallGovernment", e);                        
                        this.props.dispatch(searchLawmakers(this.state.searchObject))
                        }
                    } 
                />

                <div className="lawmaker-search-results">
                    {this.renderResults()}
                </div>
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
