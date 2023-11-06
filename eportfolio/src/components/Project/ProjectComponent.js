import React, { useEffect, useState } from "react";
import "./projectComponent.css";

const ProjectComponent = ({
  year,
  project,
  made_at,
  built_with,
  link = "",
  show_link = "",
}) => {
  /* check if website link is empty or not */
  const isLinkNotEmpty = link.length > 0;
  const [isScreenBelow986px, setIsScreenBelow986px] = useState(
    window.innerWidth < 986
  );

  // Use useEffect to update isScreenBelow986px on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsScreenBelow986px(window.innerWidth < 986);
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
        {[year, project, made_at, built_with, link].map((item, index) => (
          <td key={index}>
            {isScreenBelow986px && index === 1 && isLinkNotEmpty ? (
              <a className="clickable-links" href={link} target="_blank" rel="noreferrer">
                <span className="arrow">&#8594;&nbsp;</span>
                <span className="link-text">{item}</span>
              </a>
            ) : isLinkNotEmpty && index === 4 ? (
              <a className="clickable-links" href={link} target="_blank" rel="noreferrer">
                <span className="arrow">&#8594;&nbsp;</span>
                <span className="link-text">{show_link}</span>
              </a>
            ) : !isLinkNotEmpty && index === 4 ? (
              <span className="not-clickable-links" href={link}>
                <span className="link-text">{show_link}</span>
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
