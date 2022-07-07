import { useState } from 'react';
import apiData from './api';
import PersonInfo from './PersonInfo';
import { useInfiniteQuery } from 'react-query';

function App() {
  const { isLoading, isFetchingNextPage, isError, data, fetchNextPage, refetch } = useInfiniteQuery(
    'contacts',
    apiData,
    {
      getNextPageParam: () => true,
      keepPreviousData: true,
    },
  );

  const [selected, setSelected] = useState<string[]>([]);

  const onSelect = (id: string) => {
    setSelected(selected.includes(id) ? selected.filter((i) => i !== id) : [...selected, id]);
  };

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
        {isLoading && !isError ? (
          <div>Loading...</div>
        ) : (
          data?.pages?.map((group) =>
            group.map((personInfo) => (
              <PersonInfo
                isSelected={selected.includes(personInfo.id)}
                onSelect={onSelect}
                key={personInfo.id}
                data={personInfo}
              />
            )),
          )
        )}
      </div>
      <button className="load-more-button" onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
}

export default App;
