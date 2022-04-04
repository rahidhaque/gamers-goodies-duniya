import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q1. What is Context API?</Accordion.Header>
                    <Accordion.Body>
                        If there is a common functionality in a child component it is quite redundant to pass same data as props. This increases the duplication of code and lack of re-usability since the data is required to pass at different nesting levels. The data passed at these levels is also known as props drilling. In order to solve this problem, context API can be used which eliminate the need of props drilling at every level. In order to create it context object is created at parent level. Provider component is then used to pass to child with a default value. In the child component the passed data can be recieved and value can be altered from default value.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q2. What is Semantic Tag?</Accordion.Header>
                    <Accordion.Body>
                        Semantic elements are those which users can understand their meaning in a readable way. In a website there are lot HTML codes and it is not meaningful in raw state. To make it more meaningful semantic tags are very useful. HTML5 introduced the semantic tags which made the programmer's job easier since it was hard to read thousands of lines of codes without meaning. For example nowadays we can divide the code between section and article which is great instead of writing div as it can be hard to understand. In a website there can be a different section tags and between a section there can be many article tags to further enhance the meaning of the website. There are also other semantic tags to describe top and bottom of the website. Top of the website can be denoted as header tag and bottom can be described as footer tag. There are also many other semantic tags or html5 tags which is making our life easier.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;