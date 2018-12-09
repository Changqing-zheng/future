import React,{Component} from 'react';
import './../asset/css/product.css';

export default (elem) => {
    return(
        <div className="pro-container">
            <img className="pro-img" src={require('./../asset/img/img1.png')}/>
            <div className="pro-content">
                <div>标题</div>
                <p>活塞环低矮桑德拉</p>
                <div>
                    <span>10</span>
                    <span>门市价20</span>
                    <span className="pro-sold">已售6</span>
                </div>

            </div>
        </div>
    )
}