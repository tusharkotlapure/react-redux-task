import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getListingData } from 'actions/get-data';

import Modal from 'modal';

import 'styles/style.scss';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		'singleData': null,
  		'toggleModal': false
  	};

  	this.setSingleData = this.setSingleData.bind(this);
  	this.resetSingleData = this.resetSingleData.bind(this);
  }

  setSingleData(data){
  	this.setState({
  		'singleData': data,
  		'toggleModal': true
  	});
  }

  resetSingleData(){
  	this.setState({
  		'singleData': null,
  		'toggleModal': false
  	});
  }

  componentWillMount(){
  	this.props.getListingData();
  }

  render() {
  	const {
  		errorData,
			isListingFetching,
			listingData
  	}=this.props;


  	if(isListingFetching){
  		return <div>Loading...............</div>
  	}

  	if(errorData){
  		return <div>{errorData}</div>
  	}
  	
  	let dataBlocks = listingData.map((data,key)=>{
  		return(
  			<li key={key} onClick={e=>this.setSingleData(data)} className="grids">
  				{data.title}
  			</li>
  		);
  	});

    return (
      <div>
      	<ul>
      		{dataBlocks}
      	</ul>
      	{
      		this.state.toggleModal ?
      			<Modal data={this.state.singleData} resetData={this.resetSingleData}/>
      		:null
      	}
      </div>
    );
  }
}

function mapStateToProps(state){
	const {
		listingStore: {
			errorData,
			isListingFetching,
			listingData
		}
	}=state;
	return {
		errorData,
		isListingFetching,
		listingData
	};
}

export default connect(mapStateToProps,{
	getListingData
})(App);