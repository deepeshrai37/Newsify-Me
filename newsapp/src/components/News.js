import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'
    }

    static propTypes={
       country:PropTypes.string,
       pageSize:PropTypes.number,
       category:PropTypes.string
    }
   
   
        constructor(){

            super();
            console.log("Hello construtor here from news component")

            this.state={
                articles:[],
                loading: false,
                page :1
                

            }

        }
        async componentDidMount(){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b62cd1f746d4c0a8d7f5b1baf61f3fb&pageSize=20`
            let data=await fetch(url)
            let parsedData=await data.json()
            console.log(parsedData)
            this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults})
        }
       handlePreviousClick= async ()=>{
            console.log("previous")
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b62cd1f746d4c0a8d7f5b1baf61f3fb&page=${this.state.page-1}&pageSize=20`
            let data=await fetch(url)
            let parsedData=await data.json()
            console.log(parsedData)
            
            this.setState({
                page:this.state.page-1,
                articles:parsedData.articles
            })

        }

         handleNextClick=async ()=>{
            console.log("next")

            if(this.state.page+1> Math.ceil(this.state.totalResults/20)){

            }
            else{
                let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b62cd1f746d4c0a8d7f5b1baf61f3fb&page=${this.state.page+1}&pageSize=20`
                let data=await fetch(url)
                let parsedData=await data.json()
                console.log(parsedData)
                
                this.setState({
                    page:this.state.page+1,
                    articles:parsedData.articles
                })

            }

        }
    render() {
        return (
        <div className='container my-3'>
            <h2>Newsify Me- Top Headlines</h2>
        
            <div className='row'>
            {this.state.articles.map((element)=>{

        return <div className='col md-4' key={element.url} >
        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>

        </div>

    })}
                </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2 my-3"onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark mx-2 my-3" onClick={this.handleNextClick}>Next &rarr;</button>

            </div>

        </div>
        )
    }
    }

    export default News