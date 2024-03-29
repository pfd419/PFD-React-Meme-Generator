import React, { useCallback, useEffect } from "react";
import * as d3 from "d3";
import { connect } from 'react-redux';

import TextSelectors from '../components/TextSelectors';

const mapStateToProps = state => ({ ...state });

const ShowImage = props => {
    function getImageMeta(imageUrl) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = imageUrl;
        });
    }

    const placeImage = useCallback(
        async () => {
            const svgCreated = d3.select("#meme").select("svg")[0][0];
            if (!svgCreated) {
                let img = await getImageMeta(props.imageUrl);
                const { height, width } = img;
                const svg = d3
                    .select("#meme")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);

                const imgSvg = svg
                    .append("svg:image")
                    .attr("xlink:href", props.imageUrl)
                    .attr("width", width + "px")
                    .attr("height", height + "px");
                const imgSvgTop = imgSvg.node().getBoundingClientRect().top;

                d3
                    .select("#meme")
                    .append("text")
                    .attr("class", "meme")
                    .attr("id", "imageTextTop")
                    .style("width", width + "px")
                    .style("height", height / 2 + "px")
                    .style("top", imgSvgTop + "px")
                    .style("align-items", "flex-start")

                d3
                    .select("#meme")
                    .append("text")
                    .attr("class", "meme")
                    .attr("id", "imageTextBottom")
                    .style("width", width + "px")
                    .style("height", height / 2 + "px")
                    .style("top", imgSvgTop + height / 2 + "px")
                    .style("align-items", "flex-end")
            }

            d3.select("#imageTextTop")
                .style("font-size", props.fontSize + "em")
                .style("color", props.fontColor)
                .text(props.imageTextTop);
            d3.select("#imageTextBottom")
                .style("font-size", props.fontSize + "em")
                .style("color", props.fontColor)
                .text(props.imageTextBottom);
        },
        [props.imageUrl, props.imageTextTop, props.imageTextBottom, props.fontSize, props.fontColor]
    );

    useEffect(
        () => {
            if (props.imageUrl === "") {
                props.history.push("/");
            } else {
                placeImage();
            }
        },
        [props.imageUrl, props.imageTextTop, props.imageTextBottom, placeImage, props.history]
    );

    return (
        <div>
            <div id="meme" />
            <br />
            <TextSelectors {...props} />
        </div>
    );
};

export default connect(mapStateToProps)(ShowImage);
