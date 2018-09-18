import React from 'react';
import axios from 'axios';
import DataBrowser from '../../../src';
import data from './data';
import columns from './columns';

// Checkbox, IconButton

const fixedColWidth = 40;

class SimpleTable extends React.Component {
  state = { rows: [], loading: true };
  async componentDidMount() {
    const usersPromise = axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    const albumsPromise = axios.get(
      'https://jsonplaceholder.typicode.com/photos?albumId=1',
    );

    const [users, albums] = await Promise.all([usersPromise, albumsPromise]);

    const rows = users.data.map(user => ({
      ...user,
      album: albums.data.find(album => album.id === user.id),
    }));

    this.setState({ rows, loading: false });
  }
  render() {
    return (
      <DataBrowser totalItems={data.length} columns={columns}>
        {({
          columnFlex,
          visibleColumns,
          selectAllCheckboxState,
          checkboxState,
          onSelection,
          checkboxToggle,
          viewType,
        }) => {
          return (
            <div>
              <div>
                {visibleColumns.map((cell, index) => (
                  <div key={index} selected={cell} flex={columnFlex[index]}>
                    {cell.label}
                  </div>
                ))}
              </div>
              <div>
                {data.map((row, key) => (
                  <div key={key} selectable>
                    {visibleColumns.map(
                      ({ label, sortField, isLocked }, index) => (
                        <div
                          key={sortField}
                          flex={columnFlex[index]}
                          cursor="pointer"
                          checked={checkboxState(row.id)}
                          onClick={() =>
                            alert(`🦄 clicked on a row (id) ${row.id}`)
                          }
                        >
                          {isLocked && `🔒 `}
                          {fieldReducer(
                            getObjectPropertyByString(row, sortField),
                            sortField,
                          )}
                        </div>
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </DataBrowser>
    );
  }
}
