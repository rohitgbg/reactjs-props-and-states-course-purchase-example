import React, { Component } from 'react';

class Coursesales extends Component{

    sumPrice(price){
        this.setState({
            total: this.state.total + price
        });
    }

    constructor(props){
        super(props);
        this.state ={
            total: 0
        };
        this.sumPrice = this.sumPrice.bind(this);
    }

    render(){
        var courses = this.props.items.map((item, i)=>{
            return <Courses name={item.name} price={item.price} key={i}
            sumPrice={this.sumPrice} active={item.active} />
        });

        return(
            <div>
                <h2> You can buy courses: </h2>
                <div id="courses">
                {courses}
                <p id="total">Total: <b> {this.state.total} </b></p>
                </div>
            </div>
        );
    }
}

class Courses extends Component{

    clicker(){
        var active = !this.state.active;
        this.setState({
            active: active
        })
        this.props.sumPrice(active? this.props.price : -this.props.price);

    }

    constructor(props){
        super(props);
        this.state ={
            active: false
        }
        this.clicker = this.clicker.bind(this);
    }

    render(){
        return(
            <div>
                <p clasName={this.state.active ? 'active' : ''} onClick={this.clicker}> {this.props.name} <b>{this.props.price} </b> </p>
            </div>
        );
    }
}

export default Coursesales;