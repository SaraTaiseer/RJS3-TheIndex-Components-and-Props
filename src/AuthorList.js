import React from 'react'
import authors from './data';
import AuthorCard from './AuthorCard'

function AuthorList (props){
    const AuthorList = props.authors.map(author => (
        <AuthorCard author={author} key ={`${author.first_name} ${author.last_name}`}/>
    ));

return (
    <div className="authors">
    <div className="row">
        {AuthorList}
    </div>
    </div>
);
}

export default AuthorList;