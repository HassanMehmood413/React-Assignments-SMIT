import React from 'react'

export default function BlogCard(props) {
    return (
        <li className="blog-post-item">
            <a href="#">

                <figure className="blog-banner-box">
                    <img src={props.image} alt="Design conferences in 2022" loading="lazy" />
                </figure>

                <div className="blog-content">

                    <div className="blog-meta">
                        <p className="blog-category">Design</p>

                        <span className="dot"></span>

                        <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">{props.title}</h3>

                    <p className="blog-text">
                        {props.description}
                    </p>

                </div>

            </a>
        </li>
    )
}
