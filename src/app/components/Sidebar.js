import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => {
      return (
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="link-divider">
                General
                </li>
                {props.menulist.general.map(function(object, i){
                    return <li key={i}>
                        <Link to={object.route}>
                            <span className={`fa ${ object.icon ? object.icon: ''  }`}>
                            </span>
                            {object.name}
                            <i className="fa fa-chevron-right"></i>
                        </Link>
                </li>})}
            
                
               
                <li className="link-divider">
                    Elements
                </li>
                {props.menulist.elements.map(function(object, i){
                    return <li key={i}>
                        <Link to={object.route}>
                            <span className={`fa ${ object.icon ? object.icon: ''  }`}>
                            </span>
                            {object.name}
                            <i className="fa fa-chevron-right"></i>
                        </Link>
                </li>})}
               
                <li className="link-divider">
                Extra
                </li>
                {props.menulist.extra.map(function(object, i){
                    return <li key={i}>
                        <Link to={object.route}>
                            <span className={`fa ${ object.icon ? object.icon: ''  }`}>
                            </span>
                            {object.name}
                            <i className="fa fa-chevron-right"></i>
                        </Link>
                </li>
                 } )}
                
            </ul>
        </div>
      )
    }

export default Sidebar;