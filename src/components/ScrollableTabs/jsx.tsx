// import React, { useRef, useState } from 'react';

// const ScrollableTabs = () => {
//   const tabsList = useRef(null);
//   const [dragging, setDragging] = useState(false);

//   const removeAllActiveClasses = () => {
//     const tabs = document.querySelectorAll(".scrollable-tabs-container a");
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//   };

//   const manageIcons = () => {
//     const leftArrowContainer = document.querySelector(".scrollable-tabs-container .left-arrow");
//     const rightArrowContainer = document.querySelector(".scrollable-tabs-container .right-arrow");

//     if (tabsList.current.scrollLeft >= 20) {
//       leftArrowContainer.classList.add("active");
//     } else {
//       leftArrowContainer.classList.remove("active");
//     }

//     let maxScrollValue = tabsList.current.scrollWidth - tabsList.current.clientWidth - 20;

//     if (tabsList.current.scrollLeft >= maxScrollValue) {
//       rightArrowContainer.classList.remove("active");
//     } else {
//       rightArrowContainer.classList.add("active");
//     }
//   };

//   const drag = (e) => {
//     if (!dragging) return;
//     tabsList.current.classList.add("dragging");
//     tabsList.current.scrollLeft -= e.movementX;
//   };

//   return (
//     <div className="scrollable-tabs-container">
//       <ul ref={tabsList}
//           onMouseDown={() => setDragging(true)}
//           onMouseMove={drag}
//           onMouseUp={() => {
//             setDragging(false);
//             tabsList.current.classList.remove("dragging");
//           }}
//           onScroll={manageIcons}>
//         {/* Your tabs go here */}
//       </ul>
//       <div className="left-arrow" onClick={() => {
//         tabsList.current.scrollLeft -= 200;
//         manageIcons();
//       }}>
//         {/* Your left arrow SVG goes here */}
//       </div>
//       <div className="right-arrow" onClick={() => {
//         tabsList.current.scrollLeft += 200;
//         manageIcons();
//       }}>
//         {/* Your right arrow SVG goes here */}
//       </div>
//     </div>
//   );
// };

// export default ScrollableTabs;
