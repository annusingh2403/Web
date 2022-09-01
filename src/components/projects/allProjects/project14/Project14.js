import { logDOM } from '@testing-library/react';
import React, { Component } from 'react'
import NewItems from './NewItems'
import Spinner from './Spinner';

export default class project14 extends Component {

    constructor(){
        super();
        this.state = {
            articles: [], 
            loading: true,
            page: 1,
            pageSize: 6
        }
    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=259b6480c14b44b3baf8fbc4995004b4&page=1&pageSize=${this.state.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=259b6480c14b44b3baf8fbc4995004b4&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page : this.state.page - 1,
        loading: false
    })
    }

    handleNext = async () => { 
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)){

        }else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=259b6480c14b44b3baf8fbc4995004b4&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page : this.state.page + 1,
                articles: parsedData.articles,
                loading: false
    })
        }      
    }
 
  render() {
      return (
          <>
            <div>
                <p style={{color: 'steelblue'}}>Project Fourteen ➡️</p>
            </div>
            <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
                <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>N</span>ews <span style={{color: "tomato"}}>N</span>inja</p>
            </div>
            <div className='row my-5'> 
                {this.state.loading && <Spinner/>}
                {!this.state.loading && this.state.articles.map((e) => {
                    return (
                        <>
                            <div className='col-md-4' key={e.url}>
                                <NewItems title={e.title ? e.title.slice(0, 25) : ''} des={e.description ? e.description.slice(0, 88) : ''} imageurl={e.urlToImage} url={e.url}/>
                            </div>
                        </>
                        
                        
                )})}
                    <div className='container d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Prev</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}> &rarr; Next</button>
                    </div>
            </div>
            
            
      </>
    )
  }
}
