import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const ModalContent = ({data}) => {
    const [post, setPost] = useState('');
  
      useEffect(() => {
          import(`./MarkdownFiles/${data.file}`)
              .then(res => {
                  fetch(res.default)
                      .then(res => res.text())
                      .then(res => setPost(res))
                      .catch(err => console.log(err));
              })
              .catch(err => console.log(err));
      });
  
    return (
      //  Article Starts
      <article>
        <div className="title-section text-left text-sm-center">
          <h1>
            Post <span>Details</span>
          </h1>
          <span className="title-bg">posts</span>
        </div>
        {/* Meta Starts */}
  
        <div className="meta open-sans-font">
          <span>
            <i className="fa fa-user"></i> {data.author}
          </span>
          <span className="date">
            <i className="fa fa-calendar"></i> {data.date}
          </span>
          <span>
            <i className="fa fa-tags"></i> {data.tags}
          </span>
        </div>
        {/* Meta Ends */}
        {/* Article Content Starts */}
  
        <h1>{data.name}</h1>
        <img src={data.image} className="img-fluid" alt="Blog" />
        <div className="blog-excerpt open-sans-font pb-5">
          <Markdown>
            {post}
          </Markdown>
        </div>
        {/* Article Content Ends */}
      </article>
      // Article Ends
    );
  };

export default ModalContent;
