import { useState } from 'react';
import apiData from './api';
import PersonInfo from './PersonInfo';
import { useInfiniteQuery } from 'react-query';

function App() {
  const { isLoading, isError, data, fetchNextPage, refetch } = useInfiniteQuery(
    'contacts',
    apiData,
    {
      getNextPageParam: () => true,
      keepPreviousData: true,
    },
  );

  const [selected, setSelected] = useState([]);

  return (
    <div className="App">
      <div className="selected">Selected contacts: {selected.length}</div>
      <div className="list">
        {isError && (
          <div>
            Something bad happened
            <button className="load-more-button" onClick={() => refetch()}>
              Refetch data
            </button>
          </div>
        )}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.pages?.map((group) =>
            group.map((personInfo) => <PersonInfo key={personInfo.id} data={personInfo} />),
          )
        )}
      </div>
      <button className="load-more-button" onClick={() => fetchNextPage()}>
        Load more
      </button>
    </div>
  );
}

export default App;
