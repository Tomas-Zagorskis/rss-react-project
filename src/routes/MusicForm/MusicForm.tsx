import React from 'react';
import { Music } from 'types/types';
import CardList from '../../components/CardList/CardList';
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
    const { music } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit} />
        {music.length === 0 ? null : <CardList cards={music} />}
      </>
    );
  }
}
