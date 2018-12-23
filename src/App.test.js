import React from 'react';
import ReactDOM from 'react-dom';
import App, { Result, KeyArea } from './App';
import renderer from 'react-test-renderer';

describe('App', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', ()=>{
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Result', ()=>{
  it('renderes without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Result />, div);
  });

  test('has a valid snapshot', ()=>{
    const component = renderer.create(<Result />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('KeyArea', ()=>{
  it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<KeyArea />, div);
  });

  test('has a valid snapshot', ()=>{
    const component = renderer.create(<KeyArea />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
