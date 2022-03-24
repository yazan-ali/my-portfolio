import React from 'react';
import Tool from './tool';
import './styles/css/tools.css';
import { useInView } from 'react-intersection-observer';
import { toolsData } from './portfolioData';

function Tools() {

    const { ref, inView } = useInView();

    return (
        <div style={{ overflow: inView ? "visible" : "hidden" }} className="tools-root">
            <h2>Tools</h2>
            <hr />
            <div ref={ref} className="tools-container">
                {
                    toolsData.map(tool => (
                        <Tool
                            toolName={tool.toolName}
                            color={tool.color}
                            toolLogo={tool.toolLogo}
                            duration={tool.duration}
                            delay={tool.delay}
                            inView={inView}
                            animationDiriction={tool.animationDiriction}
                            row={tool.row}
                            toolLogoWidth={tool.toolLogoWidth}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Tools;