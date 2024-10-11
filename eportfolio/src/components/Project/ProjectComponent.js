import React, { useEffect, useState } from "react";
import "./projectComponent.css";

const ProjectComponent = ({
  year,
  project,
  project_status,
  made_at,
  built_with,
  link = "",
  show_link = "",
}) => {
  /* check if website link is empty or not */
  const isLinkNotEmpty = link.length > 0;
  const [isScreenBelow1051px, setIsScreenBelow1051px] = useState(
    window.innerWidth < 1051
  );

  // Use useEffect to update isScreenBelow1051px on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsScreenBelow1051px(window.innerWidth < 1051);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <tbody className="project-component-text">
      <tr>
        {[year, project_status, project, made_at, built_with, link].map((item, index) => (
          <td key={index}>
            {isScreenBelow1051px && index === 2 && isLinkNotEmpty ? (
              <a className="clickable-links" href={link} target="_blank" rel="noreferrer">
                <span className="arrow">&#8594;&nbsp;</span>
                <span className="link-text">{item}</span>
              </a>
            ) : isLinkNotEmpty && index === 5 ? (
              <a className="clickable-links" href={link} target="_blank" rel="noreferrer">
                <span className="arrow">&#8594;&nbsp;</span>
                <span className="link-text-last-index">{show_link}</span>
              </a>
            ) : !isLinkNotEmpty && index === 5 ? (
              <span className="not-clickable-links" href={link}>
                <span className="link-text-last-index">{show_link}</span>
                <span className="arrow"></span>
              </span>
            ) : (
              item
            )}
          </td>
        ))}
      </tr>
    </tbody>
  );
};

export default ProjectComponent;
