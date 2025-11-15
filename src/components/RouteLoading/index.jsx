import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: #1890ff;
  transform-origin: left center;
  transform: scaleX(${props => props.$progress});
  transition: transform 1s ease;
  z-index: 1000;
`;

export default function RouteLoading() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    setActive(true);
    setProgress(0);
    if (timerRef.current) clearTimeout(timerRef.current);
    requestAnimationFrame(() => setProgress(1));
    timerRef.current = setTimeout(() => {
      setActive(false);
      setProgress(0);
    }, 1000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [location.pathname, location.search, location.hash]);

  if (!active) return null;
  return <Bar $progress={progress} />;
}