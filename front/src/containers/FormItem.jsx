import React, { Component } from 'react';

class FormItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      location: '',
      price: '',
      type: '',

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/api/additem",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state),
      })
      .then(res => res.json())
      .then(
        res => this.setState({ "flash": res.flash }),
        err => this.setState({ "flash": err.flash })
      )
  }

  render() {
    return (
      <div>
        {console.log(JSON.stringify(this.state))}
        <form method='POST' onSubmit={this.handleSubmit}>
          <input type="title" name="title" placeholder="Title" onChange={this.handleChange} />
          <input type="location" name="location" placeholder="Location" onChange={this.handleChange} />
          <input type="price" name="price" placeholder="Price" onChange={this.handleChange} />
          <select type="type" name="type" placeholder="Type" value={this.state.value} onChange={this.handleChange}>
            <option value="multimedia">Multimédia</option>
            <option value="loisirs">Loisirs</option>
            <option value="maison">Maison</option>
            <option value="jeux">Jeux / Jouets</option>
            <option value="electromenage">Eléctroménagé</option>
            <option value="autres">Autres</option>
          </select>
          <input type="submit" value="Ajouter" />
        </form>
      </div>
    )
  }
}

export default FormItem
