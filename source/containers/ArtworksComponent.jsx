import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import Image from '../components/Image/Image';
import Name from '../components/Name/Name';
import MainText from '../components/MainText/MainText';
import MinutesAgo from '../components/MinutesAgo/MinutesAgo';
import MarkAsSeen from '../components/MarkAsSeen/MarkAsSeen';
import ButtonBell from '../components/ButtonBell/ButtonBell';
import Actions from '../store/Actions';
import './ArtworksComponent.scss';

const mapStateToProps = (state) => {
  const values = _.values(state);

  //no Need to add this to reducer as it is
  const acknowledgedItems = values.filter( item => item.acknowledged === true).length;
  return {
    items: values,
    acknowledgedItems: acknowledgedItems,
    unAcknowledgedItems: values.length - acknowledgedItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    acknowledge: (id) => {
      dispatch(Actions.acknowledged(id))
    }
  }
}

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="artworks-component">
        <ButtonBell
          acknowledgedItems={this.props.acknowledgedItems}
          unAcknowledgedItems={this.props.unAcknowledgedItems}
        />
        {this.props.items.map((item) =>
          <div key={item.id}>
            <div className="left-col">
              <Image thumb_url={item.user.image.thumb_url} />
            </div>
            <div className="right-col">
              <Name first_name={item.user.first_name} last_name={item.user.last_name} />
              <MainText text={item.body} />
              <div className="split">
                <MinutesAgo created={item.dates.created.date_time} />
                <MarkAsSeen acknowledged={item.acknowledged} id={item.id} markAsSeen={() => {this.props.acknowledge(item.id)}}/>
              </div>
            </div>
            <hr />
          </div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)

