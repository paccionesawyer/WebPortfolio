import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import PortfolioSlides from '../portfolioSlides';

const ModalContent = ({ data }) => {
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./MarkdownFiles/${data.file}`)
            .then((res) => {
                fetch(res.default)
                    .then((res) => res.text())
                    .then((res) => setPost(res))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    });

    return (
        //  Article Starts
        <article>
            <div className="title-section text-left text-sm-center">
                <h1>
                    Project <span>Details</span>
                </h1>
                <span className="title-bg">project</span>
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
                <span>
                    <i className="fa fa-id-badge"></i> {data.license}
                </span>
            </div>
            {/* Meta Ends */}
            <h1>{data.name}</h1>
            <a className="button" href={data.github} download>
                <span className="button-text">View on Github</span>
                <span className="button-icon fa fa-github"></span>
            </a>
            {/* Article Content Starts */}
            <div style={{padding: '0.5em', backgroundColor: 'lightgrey', marginBottom: '1em', borderRadius: '20px'}}> 
                <PortfolioSlides path = {data.slidePath} slides={data.slides}></PortfolioSlides>
            </div>
            <div class="embed-youtube">
                <iframe src={data.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="blog-excerpt open-sans-font pb-5">
                <Markdown>{post}</Markdown>
            </div>
            <div class="center">
                <img src={data.image} className="img-fluid center" alt="Blog" />
            </div>
            {/* Article Content Ends */}
        </article>
        // Article Ends
    );
};

export default ModalContent;
