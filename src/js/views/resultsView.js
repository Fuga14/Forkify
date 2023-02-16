import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again later';
  _message = '';

  _generateMarkup() {
    console.log(this._data); // All bookmarks
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
