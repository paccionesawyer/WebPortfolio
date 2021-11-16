import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

const ModalOneBlogContent = () => {
  const file_name = 'stl-to-csv-converter.md';
  const [post, setPost] = useState('');

    useEffect(() => {
        import(`./MarkdownFiles/${file_name}`)
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
          <i className="fa fa-user"></i> Sawyer
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 28 July 2021
        </span>
        <span>
          <i className="fa fa-tags"></i> converter csv binary conversion stl ascii-stl binary-stl
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>STL Conversion</h1>
      <img src="img/blog/stl_converter.svg" className="img-fluid" alt="Blog" />
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

export default ModalOneBlogContent;
