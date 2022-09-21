import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function Deeplink() {
  let { one, two } = useParams();
  let query = useQuery();
  const path: string | null = query.get('path');
  if (path) {
    window.location.href = `t21-connect://${path}`;
    return null;
  }
  return (
    <>
      <h1>No redirect path was provided</h1>
      <h1>{one}</h1>
      <h1>{two}</h1>
      <h1>{path}</h1>
    </>
  );
}
