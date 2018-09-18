import React from 'react';
import axios from 'axios';
import DataBrowser, { getObjectPropertyByString } from '../../../src';
import { View, Image } from '../globals';
import GridBoard from './GridBoard';
import GirdCard from './GirdCard';
import update from 'immutability-helper';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export class GridDraggable extends React.Component {
  state = { items: [], loading: true };
  async componentDidMount() {
    const [users, albums] = await Promise.all([
      api('users'),
      api('photos?albumId=1'),
    ]);
    const items = users.data.map(user => ({
      ...user,
      album: albums.data.find(album => album.id === user.id),
    }));
    this.setState({ items, loading: false });
  }
  moveCard = (dragIndex, hoverIndex) => {
    const { items } = this.state;
    const dragCard = items[dragIndex];
    this.setState(
      update(this.state, {
        items: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    );
  };
  render() {
    return (
      <DataBrowser
        totalItems={this.state.items.length}
        onSelectAll={this.props.onSelectAll}
        onCheckboxToggle={this.props.onCheckboxToggle}
        columns={[{ label: 'name', sortField: 'name', isLocked: true }]}
      >
        {({ visibleColumns }) => (
          <View>
            <GridBoard>
              {this.state.items.map((row, key) => (
                <GirdCard key={key} index={key} moveCard={this.moveCard}>
                  {row.album && <Image src={row.album.url} alt="" />}
                  {visibleColumns.map(({ sortField }) => (
                    <div key={sortField}>
                      {getObjectPropertyByString(row, sortField)}
                    </div>
                  ))}
                </GirdCard>
              ))}
            </GridBoard>
          </View>
        )}
      </DataBrowser>
    );
  }
}
