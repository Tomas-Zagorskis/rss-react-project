import CardList from '../../components/CardList/CardList';
import React from 'react';
import { Music } from 'types/types';
import Form from '../../components/Form/Form';

export default class MusicForm extends React.Component<object, { music: Music[] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      music: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData: Music) {
    this.setState((prevState) => ({
      music: [...prevState.music, formData],
    }));
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit} />

        {this.state.music.length === 0 ? null : <CardList cards={this.state.music} />}
      </>
    );
  }
}
